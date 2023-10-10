import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/chat',
    '/monitoring',
    '/features',
    '/og',
    '/blog',
    '/blog/:path*',
    '/legal/:path*',
    '/contact',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
