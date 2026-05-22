'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { calculateMbti, type Answer } from '@/lib/mbti';

export default function TestPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [selected, setSelected] = useState<Answer | null>(null);
  const [animating, setAnimating] = useState(false);

  const question = questions[current];
  const progress = Math.round((current / questions.length) * 100);
  const isLast = current === questions.length - 1;

  const handleAnswer = (answer: Answer) => {
    if (animating) return;
    setSelected(answer);
    setAnimating(true);

    setTimeout(() => {
      const newAnswers = { ...answers, [question.id]: answer };
      setAnswers(newAnswers);

      if (isLast) {
        const type = calculateMbti(newAnswers);
        router.push(`/result/${type}`);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
        setAnimating(false);
      }
    }, 400);
  };

  const handleBack = () => {
    if (current === 0) {
      router.push('/');
      return;
    }
    setCurrent((c) => c - 1);
    setSelected(null);
    setAnimating(false);
  };

  const dimensionColors: Record<string, string> = {
    EI: 'from-blue-400 to-indigo-500',
    SN: 'from-green-400 to-teal-500',
    TF: 'from-orange-400 to-red-400',
    JP: 'from-purple-400 to-pink-500',
  };

  const dimensionLabels: Record<string, string> = {
    EI: '에너지 방향',
    SN: '인식 방식',
    TF: '판단 방식',
    JP: '생활 방식',
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full">
        {/* 상단 진행 표시 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={handleBack}
              className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
            >
              ← 이전
            </button>
            <span className="text-sm font-bold text-purple-600">
              {current + 1} / {questions.length}
            </span>
          </div>

          {/* 프로그레스 바 */}
          <div className="w-full bg-white rounded-full h-3 shadow-inner overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${dimensionColors[question.dimension]} progress-bar`}
              style={{ width: `${progress + (100 / questions.length)}%` }}
            />
          </div>

          {/* 차원 태그 */}
          <div className="mt-2 flex justify-end">
            <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${dimensionColors[question.dimension]}`}>
              {dimensionLabels[question.dimension]}
            </span>
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 animate-slide-up">
          <div className="text-5xl mb-6 text-center">🤔</div>
          <p className="text-xl font-black text-gray-800 text-center leading-relaxed mb-2">
            Q{question.id}. {question.text}
          </p>
        </div>

        {/* 선택지 버튼들 */}
        <div className="space-y-4">
          {[
            { answer: 'A' as Answer, text: question.aChoice, color: 'from-purple-400 to-pink-400' },
            { answer: 'B' as Answer, text: question.bChoice, color: 'from-blue-400 to-indigo-400' },
          ].map(({ answer, text, color }) => (
            <button
              key={answer}
              onClick={() => handleAnswer(answer)}
              disabled={animating}
              className={`choice-btn w-full text-left p-5 rounded-2xl font-semibold text-base transition-all duration-200 border-2
                ${selected === answer
                  ? `bg-gradient-to-r ${color} text-white border-transparent shadow-lg scale-[1.02]`
                  : 'bg-white text-gray-700 border-gray-100 hover:border-purple-300 hover:shadow-md'
                }
                ${animating && selected !== answer ? 'opacity-40' : ''}
              `}
            >
              <span className={`inline-block w-8 h-8 rounded-full text-center leading-8 text-sm font-black mr-3 flex-shrink-0
                ${selected === answer ? 'bg-white/30 text-white' : 'bg-purple-100 text-purple-600'}
                inline-flex items-center justify-center
              `}>
                {answer}
              </span>
              {text}
            </button>
          ))}
        </div>

        {/* 하단 안내 */}
        <p className="text-center text-gray-400 text-xs mt-6">
          💡 정답은 없어! 솔직하게 나다운 답을 골라봐
        </p>
      </div>
    </main>
  );
}
