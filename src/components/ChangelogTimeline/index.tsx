import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export type ChangeKind = 'added' | 'changed' | 'fixed' | 'removed' | 'docs' | 'other';

export type ChangelogEntry = {
  /** 发布日期，格式 YYYY-MM-DD。 */
  date: string;
  /** 条目标题，一句话说明这次更新做了什么。 */
  title: string;
  /** 变更类型，决定圆点颜色与徽章文案。 */
  kind?: ChangeKind;
  /** 版本号或构建标识，可选。 */
  version?: string;
  /** 细分标签，例如「后端」「部署」，可选。 */
  tags?: string[];
  /** 变更明细，逐条列出，可选。 */
  details?: string[];
};

const KIND_LABEL: Record<ChangeKind, string> = {
  added: '新增',
  changed: '变更',
  fixed: '修复',
  removed: '移除',
  docs: '文档',
  other: '其他',
};

type YearGroup = {
  year: string;
  entries: ChangelogEntry[];
};

function groupByYear(entries: ChangelogEntry[]): YearGroup[] {
  const sorted = entries
    .map((entry, index) => ({entry, index}))
    .sort((a, b) => {
      if (a.entry.date === b.entry.date) {
        return a.index - b.index;
      }
      return a.entry.date < b.entry.date ? 1 : -1;
    });

  return sorted.reduce<YearGroup[]>((groups, {entry}) => {
    const year = entry.date.slice(0, 4);
    const current = groups[groups.length - 1];

    if (current && current.year === year) {
      current.entries.push(entry);
    } else {
      groups.push({year, entries: [entry]});
    }

    return groups;
  }, []);
}

function Entry({entry}: {entry: ChangelogEntry}): ReactNode {
  const kind = entry.kind ?? 'other';

  return (
    <li className={styles.entry}>
      <span className={styles.dot} data-kind={kind} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.meta}>
          <time className={styles.date} dateTime={entry.date}>
            {entry.date}
          </time>
          <span className={styles.kind} data-kind={kind}>
            {KIND_LABEL[kind]}
          </span>
          {entry.version ? (
            <span className={styles.version}>{entry.version}</span>
          ) : null}
          {entry.tags?.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Heading as="h3" className={styles.title}>
          {entry.title}
        </Heading>
        {entry.details && entry.details.length > 0 ? (
          <ul className={styles.details}>
            {entry.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

export default function ChangelogTimeline({
  entries,
}: {
  entries: ChangelogEntry[];
}): ReactNode {
  const groups = groupByYear(entries);

  if (groups.length === 0) {
    return <p className={styles.empty}>暂无更新记录。</p>;
  }

  return (
    <div className={`changelog-timeline ${styles.timeline}`}>
      {groups.map((group) => (
        <section key={group.year} className={styles.yearGroup}>
          <Heading as="h2" className={styles.yearBadge}>
            {group.year}
          </Heading>
          <ol className={styles.entries}>
            {group.entries.map((entry) => (
              <Entry key={`${entry.date}-${entry.title}`} entry={entry} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
