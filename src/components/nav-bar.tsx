import Link from "next/link";

interface NavBarProps {
  active: "HOME" | "PROGRESSO" | "RANKING";
}

export default function NavBar(props: NavBarProps) {
  const { active } = props;
  const activeClass = "border-b-4 border-purple-600 pb-2";

  const links = [
    { text: "HOME", href: "/home" },
    { text: "PROGRESSO", href: "/progress" },
    { text: "RANKING", href: "/ranking" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center bg-purple-900 p-6">
        <h1 className="text-3xl font-bold">GAMETRACK</h1>
        <img className="w-12 h-12 rounded-full" src="http://github.com/britojulia.png" alt="Profile" />
      </nav>
      <nav className="flex justify-center items-center bg-purple-950 p-6">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.text} className={active === link.text ? activeClass : ""}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
