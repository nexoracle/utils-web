// Cloudflare Worker (_worker.js)
export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      // Redirect root to /utils/
      if (url.pathname === '/') {
        return Response.redirect(`${url.origin}/utils/`, 301);
      }
      // Rewrite /utils/* to /*
      if (url.pathname.startsWith('/utils')) {
        const newUrl = new URL(request.url);
        newUrl.pathname = url.pathname.replace('/utils', '');
        return env.ASSETS.fetch(newUrl);
      }
      return new Response('Not Found', { status: 404 });
    }
  };