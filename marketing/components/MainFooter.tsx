const MainFooter: React.FC = () => {
  return (
    <footer className="p-7 flex justify-center items-center bg-fuchsia-500">
      <p className="text-white text-opacity-50 text-xl">
        © {new Date().getFullYear()} NetRivet Inc.
      </p>
    </footer>
  );
};

export default MainFooter;