import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // updated

import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 10;
const COLN_WIDTH = (100 - COL1_WIDTH) / 4;
Font.register({
  family: "Noto Sans Tamil",
  src: "https://fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Noto Sans Tamil",
    color: "#0D47A1",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    fontSize: 10,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 4,
    fontSize: 8,
    fontWeight: 500,
  },
  tableCell: {
    margin: 6,
    fontSize: 8,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  bold: {
    fontSize: 10,
    margin: 5,
    fontFamily: "Oswald",
  },

  left: { textAlign: "left", padding: 10, marginLeft: -10 },
  right: {
    textAlign: "right",
    padding: 10,
    marginTop: -55,
    marginRight: 80,
  },

  headerLeft: {
    textAlign: "left",
    padding: 10,
    marginLeft: -10,
    marginTop: -8,
    paddingInline: 10,
  },
  headerCenter: {
    textAlign: "center",
    fontSize: 23,
  },
  headerCenter2: {
    textAlign: "center",
    fontSize: 12,
  },
  headerCenter3: {
    textAlign: "center",
    fontSize: 9,
    padding: 5,
  },
  headerRight: {
    textAlign: "right",
    padding: 10,
    marginTop: -42,
  },
  footerLeft: {
    textAlign: "left",
    marginTop: 30,
  },
  footerRight: {
    textAlign: "right",
    marginTop: -35,
  },
});
const ReactPdf = (props) => {
  const user = useSelector((state) => state.user.user);
  const items = useSelector((state) => state.items.items);

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let itemsArray = [];
    items.map((item) => item.items.map((item) => itemsArray.push(item)));

    setCartItems(itemsArray.filter((item) => item.total !== ""));

    setTotal(
      itemsArray.reduce(
        (acc, item) => (item.total === "" ? acc : acc + item.total),
        0
      )
    );
  }, [setTotal, items, setCartItems]);
  return (
    <PDFViewer height="700px" width="100%">
      <Document size="A4" title="withdraw.pdf">
        {cartItems.map((user) => (
          <Page style={styles.body}>
            <View style={styles.table}>
              <View style={styles.headerLeft}>
                <Text>M.முத்துரத்தினம்</Text>
                <Text>M.சபாபதி</Text>
              </View>
              <View style={styles.headerRight}>
                <Text>cell:98426 60051</Text>
                <Text>98426 60042</Text>
              </View>
              <View style={styles.headerCenter}>
                <Text>ஸ்ரீ காடேஸ்வரா.:</Text>
              </View>
              <View style={styles.headerCenter2}>
                <Text>இளம் பட்டுப்புழு வளர்ப்பு மையம்..</Text>
              </View>
              <View style={styles.headerCenter3}>
                <Text>
                  1/47, தும்பலப்பட்டி, முத்துகவுண்டம்பாளையம் (அஞ்சல்),,,
                </Text>
                <Text>குண்டடம், தாராபுரம் வட்டம், திருப்பூர் மாவட்டம். </Text>
              </View>
            </View>
            <View style={styles.table}>
              <View style={styles.left}>
                <Text>ரசீது எண்: {user.name}</Text>
                <Text>விவசாயி விபரம்: {user.content}</Text>
                <Text>செல்: {user.amount} </Text>
              </View>
              <View style={styles.right}>
                <Text>தேதி: {user.actual_amount} </Text>
                <Text>லாட் நெ:.{user.qty}</Text>
                <Text>முட்டை பொறித்த நாள்:{user.total}</Text>
              </View>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1Header}>
                    <Text style={styles.tableCellHeader}>வ.எண்.</Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text style={styles.tableCellHeader}>பொருள் </Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text style={styles.tableCellHeader}>விலை </Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text style={styles.tableCellHeader}>
                      முட்டை தொகுதிஎண்ணிக்கை...
                    </Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text style={styles.tableCellHeader}>தொகை. </Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>1.</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>முட்டை தொகுதி விலை.. </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{user.volumeRate}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{user.volumeCount}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>2.</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      இளம் புழு வளர்ப்பு மற்றும் போக்குவரத்து கட்டணம்
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{user.transportCharge}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>3.</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>இதரவகையில். </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>4.</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>பெட்டி </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{user.box}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>5.</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      நிலுவையில் உள்ள தொகை..{" "}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                </View>
              </View>
              <View style={styles.table}>
                <View style={styles.footerLeft}>
                  <Text>இளம் புழுக்களை நல்ல நிலையில்</Text>
                  <Text>பெற்று கொண்டேன்... </Text>
                  <Text>விவசாயி / வாங்குபவர் கையொப்பம்..</Text>
                </View>
              </View>
              <View style={styles.footerRight}>
                <Text>ஸ்ரீ காடேஸ்வரா..</Text>
                <Text>இளம் பட்டுப்புழு வளர்ப்பு மையம்..</Text>
                <Text>உரிமையாளர். </Text>
              </View>
              <View style={styles.table}></View>
            </View>
          </Page>
        ))}
      </Document>
    </PDFViewer>
  );
};
export default ReactPdf;
