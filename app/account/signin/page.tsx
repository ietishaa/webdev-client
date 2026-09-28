import Link from "next/link";

export default function SignIn() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input placeholder="username" /><br /><br />
      <input placeholder="password" type="password" /><br /><br />
      <Link href="/dashboard" id="wd-signin-btn">Sign in</Link>
    </div>
  );
}