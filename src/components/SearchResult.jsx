export const SearchResult = ({ result }) => {
  return (
    <div
      className="py-[10px] px-[20px] hover:bg-[#efefef] cursor-pointer"
      onClick={() => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
