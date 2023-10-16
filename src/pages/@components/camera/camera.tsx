import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QrReader from '../../../components/QrReader/QrReader';
import styles from './camera.module.css';

export const Camera = () => {
  const router = useRouter();
  const [qrData, setQrData] = useState<string>('');

  useEffect(() => {
    if (qrData.length !== 0) {
      router.push(qrData);
    }
  }, [qrData, router]);

  if (
    typeof window !== 'undefined' &&
    window.navigator !== undefined &&
    window.navigator.mediaDevices !== undefined &&
    typeof window.navigator.mediaDevices.getUserMedia === 'function'
  ) {
    window.navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function () {
        // カメラへのアクセスが許可されたときの処理
        console.log('カメラが利用可能です');
        // alert('利用可能');
      })
      .catch(function (err) {
        // カメラへのアクセスが拒否されたとき、またはその他のエラー時の処理
        console.log('カメラにアクセスできません: ', err);
        // alert('利用不可');
      });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>行動把握システム</h2>
      <div className={styles.cameraContainer}>
        <QrReader setResult={setQrData} onRequestClose={() => null} />
      </div>
      <p className={styles.text}>学内にあるQRコードをスキャンしよう！</p>

      <a href="https://akabanedai-fes.com/02/" className={styles.site}>
        <img src="/logo.png" className={styles.logoImg} />
        <br />
        赤羽台祭公式サイトはこちら
      </a>
    </div>
  );
};
