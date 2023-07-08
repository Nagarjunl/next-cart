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
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
  underlineText: {
    textDecoration: "underline",
  },
  width60Per: {
    width: "60%",
  },
  width40Per: {
    width: "40%",
  },
  width80Per: {
    width: "88.7%",
  },
  width50Pixel: {
    width: 50,
  },
  width80Pixel: {
    width: 80,
  },
  productName: {
    width: 283,
  },
  width32Pixel: {
    width: 32,
  },
  body: {
    paddingTop: 35,
    paddingRight: 35,
    paddingBottom: 40,
    paddingLeft: 35,
    fontSize: 12,
    fontFamily: "Noto Sans Tamil",
    color: "#2c2c2c",
  },
  printContainer: {
    display: "flex",
  },
  parentDiv: {
    display: "flex",
    flexDirection: "row",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  childDiv: {
    borderLeftWidth: 1,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 5,
  },
  twoColumnFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  twoColumnFlexChild: {
    flexDirection: "row",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    order: 6,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  itemContainerDiv: {
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  thankYouContainer: {
    width: "100%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: -18,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const PdfBillStyle = (props) => {
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
        <Page style={styles.body}>
          <View style={styles.parentDiv} fixed>
            <Text style={[styles.childDiv, styles.width60Per]}>
              Invoice Number : Inv-001
            </Text>
            <Text style={[styles.childDiv, styles.width40Per]}>
              Invoice Date : 12/12/2023
            </Text>
          </View>

          <View style={styles.parentDiv} fixed>
            <View style={[styles.childDiv, styles.width60Per]}>
              <Text>Sadhana Crackers</Text>
            </View>

            <View style={[styles.childDiv, styles.width40Per]}>
              <Text>Sadhana Crackers</Text>
              <Text>+91 98949 81364 (WhatsApp)</Text>
              <Text>+91 86681 70374</Text>
              <Text>sathanafireworks@gmail.com</Text>
              <Text>
                Site no: 156, Srinivasa Nagar, Thayilpatti Village, Sivakash -
                626128
              </Text>
            </View>
          </View>

          <View style={styles.parentDiv} fixed>
            <View style={[styles.childDiv, styles.width60Per]}>
              <Text style={styles.underlineText}>Customer Detail</Text>

              <View style={styles.twoColumnFlex}>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width50Pixel}>Name </Text>
                  <Text>: {user.name}</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width50Pixel}>Address </Text>{" "}
                  <Text>: {user.address}</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width50Pixel}>City </Text>{" "}
                  <Text>: {user.city}</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width50Pixel}>District </Text>{" "}
                  <Text>: {user.district}</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width50Pixel}>Pincode </Text>{" "}
                  <Text>: {user.pincode}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.childDiv, styles.width40Per]}>
              <Text style={styles.underlineText}>Bank Detail</Text>

              <View style={styles.twoColumnFlex}>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width80Pixel}>A/C Name </Text>
                  <Text>: Sadhana Crackers</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width80Pixel}>A/C Number </Text>{" "}
                  <Text>: 33091888887667</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width80Pixel}>A/C Type </Text>{" "}
                  <Text>: Savings account </Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width80Pixel}>Bank Name </Text>{" "}
                  <Text>: State Bank Of India</Text>
                </View>
                <View style={styles.twoColumnFlexChild}>
                  <Text style={styles.width80Pixel}>IFSC Code </Text>{" "}
                  <Text>: SBI0007</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.parentDiv} fixed>
            <Text
              style={[styles.childDiv, styles.width32Pixel, styles.centerText]}
            >
              #
            </Text>
            <Text style={[styles.childDiv, styles.productName]}>
              Product Name
            </Text>
            <Text
              style={[styles.childDiv, styles.width50Pixel, styles.centerText]}
            >
              Unit
            </Text>
            <Text
              style={[styles.childDiv, styles.width50Pixel, styles.centerText]}
            >
              Amt
            </Text>
            <Text
              style={[styles.childDiv, styles.width50Pixel, styles.centerText]}
            >
              Qty
            </Text>
            <Text
              style={[styles.childDiv, styles.width50Pixel, styles.centerText]}
            >
              Total
            </Text>
          </View>

          {cartItems && (
            <>
              {cartItems.map((item, index) => {
                return (
                  <View style={styles.parentDiv} wrap={false}>
                    <Text
                      style={[
                        styles.childDiv,
                        styles.width32Pixel,
                        styles.centerText,
                      ]}
                    >
                      {index + 1}
                    </Text>
                    <Text style={[styles.childDiv, styles.productName]}>
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.centerText,
                        styles.childDiv,
                        styles.width50Pixel,
                      ]}
                    >
                      {item.unit}
                    </Text>

                    <Text
                      style={[
                        styles.rightText,
                        styles.childDiv,
                        styles.width50Pixel,
                      ]}
                    >
                      {item.amount}
                    </Text>
                    <Text
                      style={[
                        styles.centerText,
                        styles.childDiv,
                        styles.width50Pixel,
                      ]}
                    >
                      {item.qty}
                    </Text>
                    <Text
                      style={[
                        styles.rightText,
                        styles.childDiv,
                        styles.width50Pixel,
                      ]}
                    >
                      {item.total}
                    </Text>
                  </View>
                );
              })}
            </>
          )}

          <View style={styles.parentDiv} fixed>
            <View
              style={[styles.childDiv, styles.width80Per, styles.rightText]}
            >
              <Text>Total</Text>
            </View>
            <View style={[styles.childDiv, styles.rightText]}>
              <Text>{total}</Text>
            </View>
          </View>

          <View style={[styles.thankYouContainer, styles.centerText]} fixed>
            <Text>Thank you for your order</Text>
          </View>
          <View fixed>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default PdfBillStyle;
