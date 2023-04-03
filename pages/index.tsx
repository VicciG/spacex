import Head from 'next/head';
import LaunchCard from '../components/LaunchCard/LaunchCard';
import launchJson from '../mocks/launches.json';
import styles from '../styles/Home.module.css';
import { mapLaunchData } from '../utils/launchData/launchData';
import { Col, Row } from 'antd';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [launchData, setLaunchData] = useState([]);

  const getLaunchData = async (setData: Dispatch<SetStateAction<any>>) => {
    const launches = await axios.post(
      'https://api.spacexdata.com/v4/launches/query',
      JSON.stringify({
        query: {},
        options: { number: 10 },
      })
    );

    const launchesWithPayload = await Promise.all(
      launches.data.docs.map(async (launch: { payload: any; payloads: any[] }) => {
        const payload = await axios.get(`https://api.spacexdata.com/v4/payloads/${launch.payloads[0]}`);
        let fullLaunch = launch;
        fullLaunch.payload = { id: payload.data.id, type: payload.data.type, key: payload.data.id };
        return fullLaunch;
      })
    );

    // const mappedData = mapLaunchData(launchesWithPayload);
    const mappedData = mapLaunchData(launchJson);
    console.log(mappedData);
    setData(mappedData);
  };

  useEffect(() => {
    launchData.length === 0 && getLaunchData(setLaunchData);
  }, []);

  return (
    <div>
      <Head>
        <title>Launches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Col>
          <Row>
            <div className={styles.titleBar}>
              <h1 className={styles.title}>SPACEX LAUNCHES</h1>
            </div>
          </Row>
          <Row gutter={[16, 16]} className={styles.cardsContainer}>
            {launchData &&
              launchData.map((launch: any) => {
                return (
                  <Col lg={24} xl={12}>
                    <LaunchCard key={launch.key} data={launch} />
                  </Col>
                );
              })}
          </Row>
        </Col>
      </main>
    </div>
  );
}
