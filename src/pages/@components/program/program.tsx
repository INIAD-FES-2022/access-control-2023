import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { ProgramResponse } from '../../../../api/@types';
import { apiClient } from '../../../utils/apiClient';

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

  return (
    <div>
      <h1>{program?.name}へようこそ</h1>
      <Link href="/">カメラ画面に戻る</Link>
    </div>
  );
};
