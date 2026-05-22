import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-slide-up">
        {/* 상단 이모지 */}
        <div className="text-8xl mb-6 animate-float inline-block">🧬</div>

        {/* 메인 타이틀 */}
        <h1 className="text-4xl font-black text-gray-800 mb-3 leading-tight">
          나는 어떤 유형일까?
        </h1>
        <p className="text-lg text-purple-600 font-bold mb-2">청소년 MBTI 테스트</p>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          20개의 질문으로 나만의 성격 유형을 알아봐!<br />
          솔직하게 답할수록 더 정확해져 ✨
        </p>

        {/* 특징 카드 */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { emoji: '⏱️', label: '5분 완성' },
            { emoji: '🎯', label: '20가지 질문' },
            { emoji: '📊', label: '16가지 유형' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-3 shadow-sm border border-purple-100">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-xs font-semibold text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* 시작 버튼 */}
        <Link
          href="/test"
          className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-xl py-5 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 mb-4"
        >
          테스트 시작하기 🚀
        </Link>

        <p className="text-xs text-gray-400">
          * 이 테스트는 재미로 즐기는 심리 테스트예요
        </p>
      </div>

      {/* 배경 장식 */}
      <div className="fixed top-10 left-10 text-5xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>⭐</div>
      <div className="fixed top-32 right-8 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>💫</div>
      <div className="fixed bottom-20 left-8 text-4xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>🌈</div>
      <div className="fixed bottom-10 right-10 text-5xl opacity-20 animate-float" style={{ animationDelay: '0.8s' }}>✨</div>
    </main>
  );
}
