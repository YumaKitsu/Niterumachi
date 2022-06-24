import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Privacy = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 15 }}
    >
      <Box sx={{ maxWidth: "68%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          プライバシーポリシー
        </Typography>
        <Typography pt={3}>
          この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）
          の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </Typography>
        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          個人情報
        </Typography>
        <Typography p={2}>
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，
          連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を
          識別できる情報（個人識別情報）を指します。
        </Typography>
        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          個人情報の収集方法
        </Typography>
        <Typography p={2}>
          当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，
          運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,
          当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
        </Typography>
        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          個人情報を収集・利用する目的
        </Typography>
        <Typography p={2}>
          当社が個人情報を収集・利用する目的は，以下のとおりです。
        </Typography>

        <List sx={{ pl: 5 }}>
          <ListItem>
            <ListItemText>1当社サービスの提供・運営のため</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              2.ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              3.メンテナンス，重要なお知らせなど必要に応じたご連絡のため
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              4.利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>5.上記の利用目的に付随する目的</ListItemText>
          </ListItem>
        </List>

        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          プライバシーポリシーの変更
        </Typography>

        <List>
          <ListItem>
            <ListItemText>
              1.本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            2.当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
            </ListItemText>
          </ListItem>
        </List>

        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          お問い合わせ窓口
        </Typography>
        <Typography p={2}>
         本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
        </Typography>
        <Typography p={2}>
         メールアドレス：
        </Typography>
      </Box>
    </Grid>
  );
};

export default Privacy;
