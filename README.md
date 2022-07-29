# にてるまち

『にてるまち』は全国約1,900の市区町村を機械学習によって分類し、地元と似てる町を探してくれるサービスです。

[https://niterumachi.com](https://niterumachi.com)

## サービスを作った背景

大学や仕事が忙しい、コロナなどで故郷に帰りたくても帰れない人々へ向けてサービスを作りました。　　

現在住んでいる都道府県内で、故郷と似てる町を見つけ、帰省気分を味わってほしいという思いを込めています。



##### ホームページ

![niterumachi-homepage](https://user-images.githubusercontent.com/89641169/181743034-0031faa4-c3be-4a7f-a44d-9565076634a8.png)

#### リザルトページ

![niterumachi-results-page](https://user-images.githubusercontent.com/89641169/181743565-c7b95f76-be27-4b92-af75-1b73eccb0317.png)

## 使用技術

- フロントエンド
  - TypeScript
  - React 18.2.0
  - mui
  - Rakuten Travel APIs

- バックエンド
  - Django 4.0.4
  - Django REST framework 3.13.1
  
- 機械学習
  - pandas 1.4.2
  - numpy 1.22.3
  - matplotlib 3.5.1
  - scikit-learn 1.0.2

- インフラ・開発環境
  - Docker
  - AWS
    - ECS(Fargate)
    - ECR
    - S3
    - Cloudflont
    - RDS(MySQL)
    - Route53
    - ACM
    - VPC
    - ALB

- テスト
  - フロントエンド
    - testing-library(jest-dom,react,user-event)
    - jest 28.1.2
    - msw  0.42.3
    
  - バックエンド
    - TestCase(Django)

## 機能一覧

- 市区町村検索
  - 出身の都道府県・市区町村、現在住んでいる都道府県を入力
  
- 市区町村の統計情報の表示
- 宿泊施設の表示

