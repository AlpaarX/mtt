export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Nargiz.jpg","app.css","favicon.png","logo.png","social-icon/instagram.svg","social-icon/linkedin.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".css":"text/css",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-d730c846.js","imports":["_app/immutable/start-d730c846.js","_app/immutable/chunks/index-7d857393.js","_app/immutable/chunks/singletons-3c6c9372.js","_app/immutable/chunks/index-819b3d6c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/tutorial",
				pattern: /^\/tutorial\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
