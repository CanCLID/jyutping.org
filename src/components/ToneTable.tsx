import Audio from "./Audio.tsx"; // Import the existing Audio component

const ToneTable = () => {
  return (
    <table>
      <tr>
        <th>聲調</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
      </tr>
      <tr>
        <td>1</td>
        <td>
          11 <Audio id="11" />
        </td>
        <td>
          12 <Audio id="12" />
        </td>
        <td>
          13 <Audio id="13" />
        </td>
        <td>
          14 <Audio id="14" />
        </td>
        <td>
          15 <Audio id="15" />
        </td>
        <td>
          16 <Audio id="16" />
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          21 <Audio id="21" />
        </td>
        <td>
          22 <Audio id="22" />
        </td>
        <td>
          23 <Audio id="23" />
        </td>
        <td>
          24 <Audio id="24" />
        </td>
        <td>
          25 <Audio id="25" />
        </td>
        <td>
          26 <Audio id="26" />
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          31 <Audio id="31" />
        </td>
        <td>
          32 <Audio id="32" />
        </td>
        <td>
          33 <Audio id="33" />
        </td>
        <td>
          34 <Audio id="34" />
        </td>
        <td>
          35 <Audio id="35" />
        </td>
        <td>
          36 <Audio id="36" />
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          41 <Audio id="41" />
        </td>
        <td>
          42 <Audio id="42" />
        </td>
        <td>
          43 <Audio id="43" />
        </td>
        <td>
          44 <Audio id="44" />
        </td>
        <td>
          45 <Audio id="45" />
        </td>
        <td>
          46 <Audio id="46" />
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          51 <Audio id="51" />
        </td>
        <td>
          52 <Audio id="52" />
        </td>
        <td>
          53 <Audio id="53" />
        </td>
        <td>
          54 <Audio id="54" />
        </td>
        <td>
          55 <Audio id="55" />
        </td>
        <td>
          56 <Audio id="56" />
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          61 <Audio id="61" />
        </td>
        <td>
          62 <Audio id="62" />
        </td>
        <td>
          63 <Audio id="63" />
        </td>
        <td>
          64 <Audio id="64" />
        </td>
        <td>
          65 <Audio id="65" />
        </td>
        <td>
          66 <Audio id="66" />
        </td>
      </tr>
    </table>
  );
};

export default ToneTable;
