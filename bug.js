```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 13+ because of the strict mode
  return (
    <div>
      <h1>About Page</h1>
      {/* This is a comment that will be shown on the browser, which is uncommon and unexpected error */}
    </div>
  );
}
```