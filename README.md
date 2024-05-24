# Lokal wonderwall demo

Dette er et veldig enkelt eksempel på å kjøre wonderwall lokalt.
For øyeblikket har den defaultverdier koblet til team-pia, da dette er basert på eksisterende løsning i [fia-arbeidsgiver-frontend](https://github.com/navikt/fia-arbeidsgiver-frontend)

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

## Hva gjør demoen?

Den viser deg hvordan du kan kjøre wonderwall lokalt, for å teste ut frontenden din i et mer realistisk senario.
