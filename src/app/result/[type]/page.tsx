import { mbtiResults } from '@/data/results';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ShareButton from '@/components/ShareButton';

export function generateStaticParams() {
  return Object.keys(mbtiResults).map((type) => ({ type }));
}

interface Props {
  params: Promise<{ type: string }>;
}

export default async function ResultPage({ params }: Props) {
  const { type } = await params;
  const result = mbtiResults[type.toUpperCase()];

  if (!result) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 px-4 py-10">
      <div className="max-w-lg mx-auto">

        {/* 결과 헤더 카드 */}
        <div className={`bg-gradient-to-br ${result.bgGradient} rounded-3xl p-8 text-white text-center mb-6 shadow-xl animate-bounce-in`}>
          <div className="text-7xl mb-4 animate-float inline-block">{result.emoji}</div>
          <div className="text-sm font-bold opacity-80 mb-1">나의 유형은...</div>
          <h1 className="text-5xl font-black mb-2 tracking-wider">{result.type}</h1>
          <div className="text-xl font-bold mb-3">「{result.nickname}」</div>
          <p className="text-base opacity-90 font-semibold">{result.summary}</p>
        </div>

        {/* 설명 카드 */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm animate-slide-up">
          <h2 className="text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
            <span>✨</span> 나는 이런 사람이야!
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">{result.description}</p>
        </div>

        {/* 강점 / 약점 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 rounded-3xl p-5 border border-green-100">
            <h3 className="text-sm font-black text-green-700 mb-3 flex items-center gap-1">
              <span>💪</span> 나의 강점
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((s) => (
                <li key={s} className="text-xs text-green-800 flex items-start gap-1">
                  <span className="text-green-500 mt-0.5">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-50 rounded-3xl p-5 border border-orange-100">
            <h3 className="text-sm font-black text-orange-700 mb-3 flex items-center gap-1">
              <span>🌱</span> 성장 포인트
            </h3>
            <ul className="space-y-2">
              {result.weaknesses.map((w) => (
                <li key={w} className="text-xs text-orange-800 flex items-start gap-1">
                  <span className="text-orange-500 mt-0.5">•</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 추천 직업 */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm">
          <h2 className="text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
            <span>🎯</span> 어울리는 직업
          </h2>
          <div className="flex flex-wrap gap-2">
            {result.careers.map((career) => (
              <span
                key={career}
                className={`px-3 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${result.bgGradient}`}
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* 잘 맞는 유형 */}
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
            <span>💞</span> 잘 맞는 유형
          </h2>
          <div className="flex gap-3">
            {result.compatibleTypes.map((t) => {
              const r = mbtiResults[t];
              return (
                <Link
                  key={t}
                  href={`/result/${t}`}
                  className={`flex-1 bg-gradient-to-br ${r?.bgGradient || 'from-gray-400 to-gray-500'} text-white rounded-2xl p-4 text-center hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl mb-1">{r?.emoji}</div>
                  <div className="text-lg font-black">{t}</div>
                  <div className="text-xs opacity-80">{r?.nickname}</div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 버튼들 */}
        <div className="space-y-3">
          <ShareButton type={result.type} summary={result.summary} />

          <Link
            href="/test"
            className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg py-4 rounded-2xl text-center hover:-translate-y-1 transition-all shadow-md"
          >
            다시 테스트하기 🔄
          </Link>

          <Link
            href="/"
            className="block w-full bg-white text-gray-600 font-bold text-base py-4 rounded-2xl text-center border border-gray-200 hover:bg-gray-50 transition-all"
          >
            처음으로 돌아가기 🏠
          </Link>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6 mb-4">
          * MBTI는 자기 이해를 위한 참고 도구예요 😊
        </p>
      </div>
    </main>
  );
}
