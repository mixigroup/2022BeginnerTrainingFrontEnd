# React 18 Bootcamp
## Getting started

このリポジトリでは Git Submodules を利用しています。
Git Submodules を含めた clone には下記のコマンドを実行してください。

```sh
git clone --recursive https://github.com/yutaroyoshikawa/react18-bootcamp.git
```

gh コマンドを利用している場合や、 `--recursive` オプションをつけずに clone した場合は、下記のコマンドを実行することで Git Submodules を clone することができます。

```sh
git submodule update --init --recursive
```

下記コマンドの実行の前に、 api-server パッケージのセットアップを完了してください。

```sh
npm install
npm run build:api-client
npm run dev:client
```

クライアント用の開発用 Web サーバーが立ち上がると http://localhost:8080 にアクセスすることで動作を確認することができます。
## プロジェクト構成

npm workspace を利用して API サーバーと web クライアントの２パッケージに分けてプロジェクトを管理しています。

### client

Web クライアントのアプリケーション本体のパッケージです。

Web API として api-server パッケージに依存しているので、アプリケーション本体の利用のためには api-server のクライアント向けコードの生成と API サーバーの用意が必要です。
アプリケーションの利用には、依存パッケージのセットアップの後に下記の通り従ってください。

```sh
cd packages/client
npm install
npm run dev
```

### api-server

API サーバー本体の参照と Open API 定義 から生成した Web クライアント向けコードを ES Module として export しているパッケージです。
Git Submodules で API サーバーの Git リポジトリを紐づけています。

API サーバーをローカルで立ち上げるには下記の手順に従ってください。

```sh
cd packages/api-server/spa_guide_sns_server
npm install --production
rm -rf db.sqlite3
touch db.sqlite3
npm run start_migrate
npm run start_release
```

上記のコマンドで http://localhost:3000 に API サーバーが立ち上がります。
なお http://localhost:3000/api-docs で OpenAPI の API 定義を確認することができます。

API のスキーマは openapi.yaml に定義されており、スキーマ定義からクライアント向けのコードを ES Modules として生成することができます。
クライアント向けのコードを生成するには下記の手順に従ってください。

```sh
cd packages/api-server
npm install
npm run build
```
