/**
 * @param {React.ReactNode} children
 * @param {boolean} dropped this if true adds the margin on top giving a dropped effect in a grid.
 */

const HoverCard = ({ children, dropped = false }) => {
  return (
    <div
      className={`${dropped ? 'mt-16' : ''} sm:mt-0  flex flex-col p-5 rounded-lg h-fit hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 select-none cursor-pointer text-[#5A5A5A]`}
    >
      {children}
    </div>
  )
}

export default HoverCard
