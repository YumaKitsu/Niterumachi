import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Terms = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Sawarabi Gothic"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 15 }}
    >
      <Box sx={{ maxWidth: "68%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          利用規約
        </Typography>
        <Typography pt={3}>
          この利用規約（以下，「本規約」といいます。）は，このウェブサイト上で提供するサービス（以下，「本サービス」といいます。）
          の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </Typography>
        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          適用
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。
              これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
            </ListItemText>
          </ListItem>
        </List>
        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          禁止事項
        </Typography>
        <Typography pt={2} pb={4}>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              1.法令または公序良俗に違反する行為 犯罪行為に関連する行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              2.本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              3.当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              4.本サービスによって得られた情報を商業的に利用する行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              5.当社のサービスの運営を妨害するおそれのある行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              6.不正アクセスをし，またはこれを試みる行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              7.他のユーザーに関する個人情報等を収集または蓄積する行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              8.不正な目的を持って本サービスを利用する行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              9.本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>10.他のユーザーに成りすます行為</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              11.当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              12.面識のない異性との出会いを目的とした行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              13.当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>14.その他，当社が不適切と判断する行為</ListItemText>
          </ListItem>
        </List>

        <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
          本サービスの提供の停止等
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              1.当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </ListItemText>
          </ListItem>

          <List sx={{ pl: 5 }}>
            <ListItem>
              <ListItemText>
                1.本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                2.地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                3.コンピュータまたは通信回線等が事故により停止した場合
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                4.その他，当社が本サービスの提供が困難と判断した場合
              </ListItemText>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <ListItemText>
                2.本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
              </ListItemText>
            </ListItem>
          </List>

          <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
            サービス内容の変更等
          </Typography>

          <List>
            <ListItem>
              <ListItemText>
                当社は，ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
              </ListItemText>
            </ListItem>
          </List>

          <Typography pt={8} variant="h5" sx={{ fontWeight: "bold" }}>
            準拠法・裁判管轄
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                1.本規約の解釈にあたっては，日本法を準拠法とします。
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                2.本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </ListItemText>
            </ListItem>
          </List>
        </List>
      </Box>
    </Grid>
    </ThemeProvider>
  );
};

export default Terms;
