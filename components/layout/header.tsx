import { useAuth } from '../../hooks/useAuth';
import { Logo } from './logo';

export const Header = () => {
  const { session, signIn, signOut } = useAuth();
  const handleSignOut = () => signOut();

  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Logo />
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <img
              src="https://images.freeimages.com/images/large-previews/927/iced-milo-drink-1318977.jpg"
              className="w-16 h-16 rounded-full"
              alt=""
            />

            {session && (
              <button
                onClick={handleSignOut}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
