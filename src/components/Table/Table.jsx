import React, { useEffect } from "react";
import Coins from "../Coin/Coins";
import { useSelector, useDispatch } from "react-redux";
import { getCoins } from "../../redux/coin-reducer";
import {
  StyledTable,
  Thead,
  Tr,
  Td,
} from "../../styled-components/Table-styles";

function Table() {
  const dispatch = useDispatch();

  const coins = useSelector((state) => state.coins.coins);

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <>
      <StyledTable>
        <Thead>
          <Tr>
            <th>id</th>
            <th>rank</th>
            <th>symbol</th>
            <th>name</th>
            <th>supply</th>
            <th>maxSupply</th>
            <th>marketCapUsd</th>
            <th>volumeUsd24Hr</th>
            <th>priceUsd</th>
            <th>changePercent24Hr</th>
            <th>vwap24Hr</th>
          </Tr>
        </Thead>
        {coins.map((coin) => (
          <tbody>
            <Tr>
              <Coins
                key={coin.id}
                id={coin.id}
                name={coin.name}
                price={coin.priceUsd}
              />
              <Td> {coin.rank} </Td>
              <Td> {coin.symbol} </Td>
              <Td> {coin.name} </Td>
              <Td> {coin.supply} </Td>
              <Td> {coin.maxSupply} </Td>
              <Td> {coin.marketCapUsd} </Td>
              <Td> {coin.volumeUsd24Hr} </Td>
              <Td> {coin.priceUsd} </Td>
              <Td> {coin.changePercent24Hr} </Td>
              <Td> {coin.vwap24Hr} </Td>
            </Tr>
          </tbody>
        ))}
      </StyledTable>
    </>
  );
}

export default Table;
