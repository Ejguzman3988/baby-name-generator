import MyComponent from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between p-4">
        <h1 className="">My Website</h1>
        <MyComponent />
      </nav>
      <main className="">
        <h2 className="">Welcome to my website!</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          ante consequat, laoreet enim vel, blandit odio. Vestibulum ac enim eu
          arcu sagittis suscipit. Donec eget velit velit.
        </p>
      </main>
    </div>
  );
}
