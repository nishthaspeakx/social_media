# Platform integration notes

Research date: 21 September 2026. This is a production implementation checklist, not a claim that accounts or adapters are connected. Recheck exact scopes, media constraints and metrics in each app console before implementation.

## Instagram and Facebook

Choose Instagram API with Facebook Login because this campaign also manages a Facebook Page. Use a professional Instagram account linked to the Page. Meta's own Postman collection confirms this requirement and notes that Story publishing on this route is available for business accounts. If the current account is Creator-only, keep Stories in a manual publishing task until capability is verified. Source: https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api

The same collection documents pages_show_list, instagram_basic, instagram_content_publish and pages_read_engagement. Publishing, insights and comment access are distinct capabilities; request only what the product uses. Draft scopes to validate in App Review: instagram_manage_insights for Instagram reports; pages_manage_posts for Page publishing; read_insights for Page insights; optional instagram_manage_comments for comment workflows. These latter scopes and their account-specific dependencies need a live console verification; they were not independently confirmed in this browsing session.

Proposed adapter flow: create a media container, poll processing, publish only after readiness, and persist the platform ID/permalink. Instagram and Facebook remain separate jobs. Test Page video/Reel upload separately from a text/photo post. The Story set contains three ordered frames; track each frame receipt and reconcile partial success before retrying.

Official Meta documentation returned errors and rate limiting during research, including the changelog. Therefore no latest Graph API version or numerical rate limit is asserted here. A release blocker is to pin META_GRAPH_API_VERSION to a version verified as supported in the actual app, record the verification date, and pass create/read/insight smoke tests. Never silently choose an unversioned endpoint. Official references to verify:
- https://developers.facebook.com/docs/graph-api/changelog/
- https://developers.facebook.com/docs/instagram-platform/content-publishing/
- https://developers.facebook.com/docs/pages-api/posts/

Capability discovery must record actual fields returned by account/format/version. Do not assume legacy impressions, 3-second views, completion, reach or watch-time fields exist across all channels. An unsupported field is unavailable with a reason, never zero. Retain raw responses and the metric definition/version.

## X

X currently documents pay-per-use credits instead of fixed subscription tiers. Its listed create-post rate is $0.015/request, or $0.200 with a URL; current console rates take precedence. The October base plan has 62 text posts without external URLs, giving a listed write-only estimate of $0.93, excluding reads, uploads, retries and other operations. Configure a hard billing limit and a separate application budget. Source: https://docs.x.com/x-api/getting-started/pricing

POST /2/tweets is the documented create endpoint. Its schema includes made_with_ai. Verify supported fields and the platform's disclosure policy for the exact generated asset before posting; include disclosure choices in the approved content hash. Source: https://docs.x.com/x-api/posts/create-post

Use user-context authorization. Validate tweet.read, tweet.write, users.read, offline.access and any upload-specific permissions against the selected OAuth flow. A media upload flow requires its own smoke test; do not assume the same token supports every endpoint. October X content is text-only in the base calendar. A future video cut requires a new reviewed variant and approved budget.

Validate text using X's weighted character counting, not JavaScript string length alone. The supplied draft text is short, but production checks must handle URLs, emoji and Unicode. Respect runtime rate-limit headers. On timeout after a create request, mark outcome unknown and reconcile; never blindly repost.

## Release evidence required

For each platform attach: account owner, account type, granted scopes, app review status, API version, token health, media capability fixture, real test-post ID, successful metrics response, unsupported metric list, rate-limit handling test and revocation recovery test. No social tokens belong in browser storage or the prototype. Request advanced access only where the app's use and account ownership require it.
