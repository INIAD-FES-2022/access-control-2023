import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { ProgramResponse } from '../../../../api/@types';
import { apiClient } from '../../../utils/apiClient';

const Exit = () => {
  const [historyCount, setHistoryCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      return await apiClient.history.$get();
    };
    (async () => {
      try {
        const history = await fetch();
        setHistoryCount(history.length);
      } catch {
        setHistoryCount(0);
      }
    })();
  }, []);

  return (
    <div>
      <h1>赤羽台祭にお越しいただきありがとうございました</h1>
      {historyCount > 4 && (
        <>
          <p>たくさんの展示をご覧いただきありがとうございます</p>
          <p>5回以上読み取りいただいたため景品のお菓子がいただけます</p>
        </>
      )}
    </div>
  );
};

export const Program = ({ programId }: { programId: string }) => {
  const [program, setProgram] = useState<ProgramResponse | null>(null);

  useEffect(() => {
    const fetch = async () => {
      return await apiClient.enter._id(programId).$post();
    };
    (async () => {
      try {
        const history = await fetch();
        setProgram(history.program);
      } catch {
        setProgram(null);
      }
    })();
  }, [programId]);

  if (program?.name === 'program3') return <Exit />;

  return (
    <div>
      <h1>{program?.name}へ移動しました</h1>
      <Link href="/">カメラ画面に戻る</Link>
    </div>
  );
};
