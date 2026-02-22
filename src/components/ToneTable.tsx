import Audio from "./Audio.tsx";

const ToneTable = () => {
  return (
    <table>
      <tr>
        <th><span className="inline-block -scale-y-100">⤷</span></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>
          1￫1 <Audio id="11" />
        </td>
        <td>
          1￫2 <Audio id="12" />
        </td>
        <td>
          1￫3 <Audio id="13" />
        </td>
        <td>
          1￫4 <Audio id="14" />
        </td>
        <td>
          1￫5 <Audio id="15" />
        </td>
        <td>
          1￫6 <Audio id="16" />
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>
          2￫1 <Audio id="21" />
        </td>
        <td>
          2￫2 <Audio id="22" />
        </td>
        <td>
          2￫3 <Audio id="23" />
        </td>
        <td>
          2￫4 <Audio id="24" />
        </td>
        <td>
          2￫5 <Audio id="25" />
        </td>
        <td>
          2￫6 <Audio id="26" />
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>
          3￫1 <Audio id="31" />
        </td>
        <td>
          3￫2 <Audio id="32" />
        </td>
        <td>
          3￫3 <Audio id="33" />
        </td>
        <td>
          3￫4 <Audio id="34" />
        </td>
        <td>
          3￫5 <Audio id="35" />
        </td>
        <td>
          3￫6 <Audio id="36" />
        </td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>
          4￫1 <Audio id="41" />
        </td>
        <td>
          4￫2 <Audio id="42" />
        </td>
        <td>
          4￫3 <Audio id="43" />
        </td>
        <td>
          4￫4 <Audio id="44" />
        </td>
        <td>
          4￫5 <Audio id="45" />
        </td>
        <td>
          4￫6 <Audio id="46" />
        </td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>
          5￫1 <Audio id="51" />
        </td>
        <td>
          5￫2 <Audio id="52" />
        </td>
        <td>
          5￫3 <Audio id="53" />
        </td>
        <td>
          5￫4 <Audio id="54" />
        </td>
        <td>
          5￫5 <Audio id="55" />
        </td>
        <td>
          5￫6 <Audio id="56" />
        </td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>
          6￫1 <Audio id="61" />
        </td>
        <td>
          6￫2 <Audio id="62" />
        </td>
        <td>
          6￫3 <Audio id="63" />
        </td>
        <td>
          6￫4 <Audio id="64" />
        </td>
        <td>
          6￫5 <Audio id="65" />
        </td>
        <td>
          6￫6 <Audio id="66" />
        </td>
      </tr>
    </table>
  );
};

export default ToneTable;
