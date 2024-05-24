Dette er et veldig enkelt eksempel på å kjøre wonderwall lokalt.

## Kom i gang

start serveren i separate terminaler:

```bash
npm run dev
# og
docker-compose up
```

Om du åpner [http://localhost:3000](http://localhost:3000) vil du ikke få token fra "wonderwall".

Om du åpner [http://localhost:2222](http://localhost:2222) vli du bli redirectet til "Mock OAuth2 Server Sign-in".
Her kan du fylle inn hva som helst av bokstaver i "Enter any user/subject" og så trykke "SIGN-IN". Du skal så bli redirectet til siden "innlogget".
