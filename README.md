# phapp-schedule-link

The link page to schedule interview for Interviewer/Candidates

[![Build status](https://badge.buildkite.com/fcef6e4cd42f715e31d5780d70b8ffdc2a4c1f9d5dc280eefc.svg)](https://buildkite.com/predictive-hire/app-phapp-schedule-link)

## Prepare

### Volta (only once globally)

- install

```bash
# Install volta
curl https://get.volta.sh | bash
```

- update `~/.zshrc`

```bash
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
export VOLTA_FEATURE_PNPM=1
```

- check

```bash
volta --version
```

### OpenSSL (only once globally)

Check OpenSSL is installed (should be by default however may require > 1.1.1f):

```bash
brew install openssl
openssl version
```

Note: **DON’T USE LibreSSL**, if your openssl version points to LibreSSL, reopen the terminal first, if not working then
please
follow https://stackoverflow.com/questions/62195898/openssl-still-pointing-to-libressl-2-8-3?answertab=active#answer-72274633
to update the env path.

### Setup SSL (only once locally)

```bash
pnpm ssl:local
```

## Generate code from local development GraphQL schema
- Publish schema from corresponding local repos
```bash
# Publish schema from backend repo(for example: APPS, ORG etc), please refer to the README.md in the corresponding repo for package manager
npm run schema:publish:local
```
- Run [phapi-gateway-graphql](https://github.com/PredictiveHire/phapi-gateway-graphql) locally
- Generate new schema from Schedule Link App
```bash
# run codegen in scheduler-link repo
pnpm codegen
```
