export default {
    async fetch(request, env) {
      const _url = new URL(request.url);
      const hostname = _url.hostname;
      _url.hostname = "PaperCraneCr-librechat.hf.space";
      const req = new Request(_url, request);
      req.headers.set('origin', 'https://PaperCraneCr-librechat.hf.space');
      
      const res = await fetch(req);
      let newres = new Response(res.body, res);
  
      let location = newres.headers.get('location');
      if (location !== null && location !== "") {
        location = location.replace('://PaperCraneCr-librechat.hf.space', '://'+hostname);
        newres.headers.set('location', location);
      }
      return newres;
    },
  };