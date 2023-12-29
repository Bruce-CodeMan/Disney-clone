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
    <header>
      {/* Icon */}
      <Link href="/">
        <Image src="https://links.papareact.com/a943ae" alt="Disney"
          width={120}
          height={100}
          className="cursor-pointer invert-0"
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