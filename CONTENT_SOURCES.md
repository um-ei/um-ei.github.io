# Content and asset sources

Sources retrieved 2026-09-07. Website repository: [um-ei/um-ei.github.io](https://github.com/um-ei/um-ei.github.io).

## Design and branding

- Reference: [Stanford REAL](https://real.stanford.edu/index.html), including its [Lab](https://real.stanford.edu/lab.html) and [Research](https://real.stanford.edu/research.html) pages. The local implementation follows its white canvas, compact navigation, spacious home layout, people sections, and illustrated publication list.
- Current UMEI branding: user-supplied v54 assets in `public/assets/brand/`. `UMEI_bimanual_v54_matching_faces.svg` appears on Home; `UMEI_bimanual_v54_matching_faces_wordmark.svg` appears in the sticky header and favicon. Earlier design variants are retained separately in the local design workspace.
- Lab name and institution follow the supplied logo: Embodied Intelligence Lab, University of Macau.
- Home research description uses the exact wording supplied by the user in the revision request.

## Faculty and publications

- User-specified repository: [pointW/pointw.github.io](https://github.com/pointW/pointw.github.io).
- [Publication and biography source](https://github.com/pointW/pointw.github.io/blob/master/_pages/about.md).
- [Canonical personal website](https://www.dianwang.io/), the destination of https://pointw.github.io/.
- [Dian Wang portrait](https://www.dianwang.io/images/profile.png), copied to `public/assets/people/dian-wang.png`.
- All 38 visible publication entries were imported, with 38 original thumbnails and 111 resource links. Nine thumbnails are animated GIFs; original formats are preserved and research images load lazily.
- At import, five entries explicitly labeled Preprint had no stated publication year and were left undated. The original entries retain the personal website order without year groups.
- Titles, author order and contribution markers, venue/status, resource URLs, and separate workshop award notes are preserved. Trophy emoji is omitted from displayed venue text; award wording is retained.
- Every thumbnail retains its source URL in `data/publications.json`. All local images were fetched successfully. A prepublication HTTP audit checked 111 unique external URLs on 2026-09-07; publisher and OpenReview access restrictions remain documented in the audit report.
- The SEIL project URL was updated from the broken `saulbatman.github.io/project/seil/` address to `https://mingxi-jia.github.io/SEIL_site/`, verified through the author’s website and official repository. The paper order and bibliographic text are unchanged.
- The source spelling “Robin Walter” in MATCH POLICY is retained.

### Publication updates — 2026-10-27

- Added DUO Policy as the newest entry, bringing the list to 39 publications. Title, author order and spelling, and Project/PDF/Video links follow [Mingxi Jia’s homepage](https://mingxi-jia.github.io/) and the [DUO Policy project page](https://mingxi-jia.github.io/duo_policy_site/). The entry is labeled Preprint at the user’s request; the project’s citation gives 2026. Code and arXiv links are omitted because they are still marked “coming soon.”
- Copied the [original DUO Policy thumbnail](https://mingxi-jia.github.io/images/duo_policy.jpg) to `public/assets/publications/duo_policy.jpg`; the source URL is retained in the publication data.
- Updated Mixture of Frames Policy from Preprint to CoRL 2026, with year 2026 and published status, as requested and confirmed by its [official project page](https://mofpo.github.io/).

### Research thumbnail compression — 2026-10-30

- Original publication media remain in place. `public/assets/publications/optimized/` contains the compressed derivatives used on Research; each publication retains its original source URL. All 39 publications, links, and display sizes are unchanged.
- The 30 static thumbnails fit within 560 × 340 pixels without upscaling, approximately twice the largest displayed size. They use WebP quality 92 with sharp chroma conversion, or lossless WebP after resizing where it is economical. This is a perceptual optimization, not a claim of pixel-identical originals.
- Eight photographic/simulation GIFs use silent H.264 MP4 loops with WebP posters. Frame timing and total duration are preserved; videos load near the viewport and pause when offscreen. The ICLR 2023 line-art animation instead uses native-resolution lossless animated WebP to preserve its colored edges and text.
- The complete set of referenced thumbnail media, including video posters, decreases from 41,130,564 to 6,538,184 bytes (84.1%). This is the full-list asset total, not the initial page download size. The local comparison page and per-file audit are in ignored `work/image-compression-20261030/`.

## Members

Degree categories and membership are supplied by the user on 2026-09-07.

- Yizhe Zhu — PhD Student. [User-supplied page](https://yizhezhu0925.github.io/yizhezhu0925/); [portrait](https://yizhezhu0925.github.io/yizhezhu0925/images/profile.png). The external page still says Master at Northeastern; this website follows the user’s current PhD classification.
- Xiaoming Liu — PhD Student. [Portrait source page](https://www.bolt-lab.org/members/3_xiaoming.html); [portrait](https://www.bolt-lab.org/images/xiaoming.jpg). His website link is omitted from the lab page at the user’s request.
- Yi Zhou — Master’s Student. Portrait supplied by the user on 2026-09-10 and copied to `public/assets/people/yi-zhou.jpg`. No personal website was supplied.

No group photos, Robots section, or Alumni section are included.
