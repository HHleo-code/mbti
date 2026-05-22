'use client';

interface Props {
  type: string;
  summary: string;
}

export default function ShareButton({ type, summary }: Props) {
  const handleShare = async () => {
    const text = `나의 MBTI는 ${type}! ${summary}\n청소년 MBTI 테스트로 너도 알아봐 👉`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: `나의 MBTI는 ${type}!`, text, url });
      } catch {
        // 사용자 취소 등 무시
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${text}\n${url}`);
        alert('링크가 클립보드에 복사됐어! 친구한테 공유해봐 🎉');
      } catch {
        alert('공유하기가 지원되지 않는 브라우저예요 😢');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black text-lg py-4 rounded-2xl hover:-translate-y-1 transition-all shadow-md"
    >
      친구한테 공유하기 📤
    </button>
  );
}
