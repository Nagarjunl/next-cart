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
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Noto Sans Tamil",
    color: "#0D47A1",
  },
  printContainer: {
    display: "flex",
  },
  invoiceDetailContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    order: 6,
  },
  invoiceDetailContainerDiv: {
    borderLeftWidth: 1,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 5,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  logoContainerLeft: {
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  logoContainerRight: {
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  headerContainerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  customerDetailHeader: {
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  bankDetailHeader: {
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderRightWidth: 1,
  },
  customerDetail: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  customerDetailDiv: {
    flexDirection: "row",
  },
  bankDetail: {
    paddingHorizontal: 5,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderLeftWidth: 1,
  },
  bankDetailDiv: {
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
  productName: {
    flexGrow: 3,
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    order: 6,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  thankYouContainer: {
    display: "flex",
    flexDirection: "row",
    order: 6,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
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
});
const PdfBill = (props) => {
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
          <View style={styles.printContainer}>
            <View style={styles.invoiceDetailContainer}>
              <Text style={[styles.invoiceDetailContainerDiv, { flexGrow: 4 }]}>
                Invoice Number : Inv-001
              </Text>
              <Text
                style={[
                  styles.invoiceDetailContainerDiv,
                  { flexShrink: 3, flexWrap: "wrap" },
                ]}
              >
                Invoice Date : 12/12/2023
              </Text>
            </View>

            <View style={styles.logoContainer}>
              <View style={[styles.logoContainerLeft, { flexGrow: 4 }]}>
                {/* <Image
                  src="/img/logo.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                /> */}
                <Text>Sadhana Crackers</Text>
              </View>

              <View
                style={[
                  styles.logoContainerRight,
                  ,
                  { flexShrink: 3, flexWrap: "wrap" },
                ]}
              >
                <Text>Sadhana Crackers</Text>
                <Text>+91 98949 81364 (WhatsApp)</Text>
                <Text>+91 86681 70374</Text>
                <Text>sathanafireworks@gmail.com</Text>
                <Text>Site no: 156, Srinivasa Nagar,</Text>
                <Text>Thayilpatti Village, </Text>
                <Text>Sivakash - 626128</Text>
              </View>
            </View>

            <View style={styles.headerContainerHeader}>
              <View style={styles.customerDetailHeader}>
                <Text>Customer Detail</Text>
              </View>
              <View style={styles.bankDetailHeader}>
                <Text>Bank Detail</Text>
              </View>
            </View>

            <View style={styles.headerContainer}>
              <View style={styles.customerDetail}>
                <View style={styles.customerDetailDiv}>
                  <Text>Name </Text>
                  <Text>: {user.name}</Text>
                </View>
                <View style={styles.customerDetailDiv}>
                  <Text>Address </Text> <Text>: {user.address}</Text>
                </View>
                <View style={styles.customerDetailDiv}>
                  <Text>City </Text> <Text>: {user.city}</Text>
                </View>
                <View style={styles.customerDetailDiv}>
                  <Text>District </Text> <Text>: {user.district}</Text>
                </View>
                <View style={styles.customerDetailDiv}>
                  <Text>Pincode </Text> <Text>: {user.pincode}</Text>
                </View>
              </View>

              <View style={styles.bankDetail}>
                <View style={styles.bankDetailDiv}>
                  <Text>A/C Name </Text>
                  <Text>: Sadhana Crackers</Text>
                </View>
                <View style={styles.bankDetailDiv}>
                  <Text>A/C Number </Text> <Text>: 33091888887667</Text>
                </View>
                <View style={styles.bankDetailDiv}>
                  <Text>A/C Type </Text> <Text>: Savings account </Text>
                </View>
                <View style={styles.bankDetailDiv}>
                  <Text>Bank Name </Text> <Text>: State Bank Of India</Text>
                </View>
                <View style={styles.bankDetailDiv}>
                  <Text>IFSC Code </Text> <Text>: SBI0007</Text>
                </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.itemContainerDiv}>#</Text>
              <Text style={[styles.itemContainerDiv, styles.productName]}>
                Product Name
              </Text>
              <Text style={styles.itemContainerDiv}>Content</Text>
              <Text style={styles.itemContainerDiv}>Amount</Text>
              <Text style={styles.itemContainerDiv}>Quantity</Text>
              <Text style={styles.itemContainerDiv}>Total</Text>
            </View>

            {cartItems && (
              <>
                {cartItems.map((item, index) => {
                  return (
                    <View style={styles.itemContainer}>
                      <Text style={styles.itemContainerDiv}>{index + 1}</Text>
                      <Text
                        style={[styles.itemContainerDiv, styles.productName]}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={[styles.centerText, styles.itemContainerDiv]}
                      >
                        {item.content}
                      </Text>

                      <Text style={[styles.rightText, styles.itemContainerDiv]}>
                        {item.amount}
                      </Text>
                      <Text
                        style={[styles.centerText, styles.itemContainerDiv]}
                      >
                        {item.qty}
                      </Text>
                      <Text style={[styles.rightText, styles.itemContainerDiv]}>
                        {item.total}
                      </Text>
                    </View>
                  );
                })}
              </>
            )}

            <View style={styles.totalContainer}>
              <View style={styles.rightText}>
                <Text>Total</Text>
              </View>
              <View style={styles.rightText}>
                <Text>{total}</Text>
              </View>
            </View>

            <View style={[styles.thankYouContainer, styles.centerText]}>
              <Text style={styles.centerText}>Thank you for your order</Text>
            </View>
          </View>
          <View>
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
export default PdfBill;
