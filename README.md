-> put .next/ and nodes_modules/ in .gitignore before commit

-> src/pages : that will be routing so src/pages/about.tsx gives localhost:3000/about page
-> need to see for the implementation of connectkit on others pages + styling (its on src/components/Connect.tsx (I've tried a basic textAlign 'right' but can put css page))

-> commit f7204ea from 7 August doesn't give any deshydration errors on nextjs so its ok (useMounted)


Abi can be put on src/components/contracts.ts and then function writing are like the one in WriteContract.tsx (can add args:[] in line 11 for arguments of function, see wagmi.sh docs)
Need to put a general components that render a general html css for all routes/pages and put the wallet in it
I think it should be available already on routing(like on /about) just need to see the button

For others chains it can be added/modified in src/pages/_app.tsx: add the chains in like 4 like ''import { scrollTestnet, base } from 'wagmi/chains' and then line 11: ''const chains = [scrollTestnet, base]''

