import { Avatar, Card, Descriptions, Tag } from 'antd';
import dynamic from 'next/dynamic';
import styles from '../../styles/LaunchCard.module.css';

const Meta = dynamic(import('antd/es/card/Meta'), { ssr: false }); // Async API cannot be server-side rendered

interface Status {
  success: boolean;
  reason?: string;
}

interface Payload {
  id: string;
  type: string;
}

export interface LaunchData {
  key: string;
  name: string;
  date: string;
  core: string;
  payload: Payload;
  image: string;
  status: Status;
}

interface LaunchCardProps {
  data: LaunchData;
}

const { Item } = Descriptions;
const LaunchCard = ({ data }: LaunchCardProps) => {
  return (
    <Card className={styles.card}>
      <Meta avatar={<Avatar src={data.image} className={styles.avatar} />} title={data.name} className={styles.meta} />
      <Descriptions bordered column={2} className={styles.descriptions}>
        <Item label="Date" key={'date'} span={2}>
          {data.date}
        </Item>
        <Item label="Core" key={'core'} span={2}>
          {data.core}
        </Item>
        <Item label="Payload ID" key={'payloadId'} span={1}>
          {data.payload.id}
        </Item>
        <Item label="Payload Type" key={'payloadType'} span={1}>
          {data.payload.type}
        </Item>
        <Item label="Status" key={'status'} span={2}>
          {data.status.success ? (
            <Tag color="success">Success</Tag>
          ) : (
            <>
              <Tag color="error">Failed</Tag> <p>{data.status.reason && data.status.reason}</p>
            </>
          )}
        </Item>
      </Descriptions>
    </Card>
  );
};

export default LaunchCard;
