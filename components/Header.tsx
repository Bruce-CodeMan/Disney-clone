/*
 * @Date: 2023-12-28 16:07:48
 * @Author: Bruce Hsu
 * @Description: 
 */
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between
    p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      {/* Icon */}
      <Link href="/">
        <Image src="https://links.papareact.com/a943ae" alt="Disney"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2">
        {/* GenreDropDown */}
        {/* SearchInput */}
        {/* ThemeToggler */}
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header;