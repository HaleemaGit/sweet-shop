import { Layout } from '../../components/layout/layout';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {
  const { signIn, session } = useAuth();
  const handleSignIn = () => {
    signIn('google');
  };

  return (
    // <Layout>
    <div>
      {!session && (
        <button
          onClick={handleSignIn}
          className="mt-6 group outline-none relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        >
          Login
        </button>
      )}
    </div>
    // </Layout>
  );
}
