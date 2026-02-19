export const JoinSectionContact = () => {
  return (
    <footer className="w-full pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-gray-3 border-b pb-16 text-center">
          <p className="text-gray-5 mb-4 text-sm">문의사항이 있으신가요?</p>

          <a
            href="mailto:hello@eliomakers.com"
            className="text-gray-9 hover:text-primaryBackColor text-2xl font-semibold transition-colors duration-300"
          >
            hello@eliomakers.com
          </a>
        </div>
        <div className="py-12 text-center">
          <p className="text-gray-5 text-sm">
            © 2026 엘리오 메이커스. All rights reserved.
          </p>
          <p className="text-gray-4 mt-3 text-xs">Powered by Elio</p>
        </div>
      </div>
    </footer>
  );
};
