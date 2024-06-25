
import "./styles.css";

function App() {
  return (
    <>
      <div>
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid rgba(0, 0, 0, 0.16)",
            display: "flex",
            paddingTop: "5px",
            paddingBottom: "5px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "200px" }}>
            <div style={{ marginLeft: "7px", width: "54px" }}>
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                }}
              ></div>
            </div>
            <div
              style={{
                backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20100%2024%22%20enable-background%3D%22new%200%200%20100%2024%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20fill%3D%22%23333%22%20d%3D%22M23.3519421%2C0.5l-5.8522224%2C17.8633347l-2.4661112-8.292779h-3.961112l4.5552788%2C13.084445h4.2166653%0A%09L27.8049965%2C0.5H23.3519421z%20M8.2677746%2C18.3633347l-2.7983332-8.292779H1.4572191l4.5552778%2C13.084445h4.6127777%0A%09l1.8783331-5.5902786l-2.0316658-5.8202772L8.2677746%2C18.3633347z%20M56.4272194%2C15.9738884l6.4208336-5.9033327h-5.3474998%0A%09l-4.1208344%2C3.871666V4.1672225H49.597496v18.9877777h3.7822227v-5.2325001l5.1111107%2C5.2325001h5.1175003L56.4272194%2C15.9738884z%0A%09M48.2749977%2C13.9741659c0%2C0-0.5111122-0.3513889-1.8144493-0.3513889c-0.9583321%2C0-1.7761078%2C0.5622225-2.0955544%2C0.9902782%0A%09c-0.3194427%2C0.4216671-0.664444%2C1.2713881-0.664444%2C2.7344427v5.8138905h-3.9674988V10.0705557h3.9674988l-0.0255585%2C1.8591671%0A%09h0.0511093c0.7411118-1.4311104%2C1.8336143-2.1147213%2C3.2391701-2.1147213c0.8752785%2C0%2C1.3097229%2C0.2619448%2C1.3097229%2C0.2619448%0A%09v3.8972197H48.2749977z%20M31.2294407%2C23.5c-4.1591663%2C0-7.3088875-2.5874996-7.3088875-6.8297215%0A%09s3.1497211-6.855278%2C7.3088875-6.855278s7.2833347%2C2.6130562%2C7.2833347%2C6.855278S35.388607%2C23.5%2C31.2294407%2C23.5z%0A%09M31.2294407%2C13.1755552c-1.8911114%2C0-2.9899979%2C1.4694443-2.9899979%2C3.4116659%0A%09c0%2C1.9486122%2C1.0924988%2C3.4116669%2C2.9899979%2C3.4116669c1.8655567%2C0%2C2.9899998-1.4694443%2C2.9899998-3.4116669%0A%09S33.0949974%2C13.1755552%2C31.2294407%2C13.1755552z%20M96.8816605%2C23.1613903h-4.0824966l-0.0830612-1.3416672%0A%09C92.1538773%2C22.3819447%2C91.086937%2C23.5%2C88.9530411%2C23.5c-2.3191681%2C0-4.7724915-1.2522221-4.7724915-4.1847229%0A%09s2.696106-3.9227772%2C5.1175003-4.0249996l3.3094406-0.1341667v-0.293889c0-1.3863888-0.9838867-2.1083336-2.696106-2.1083336%0A%09c-1.6802826%2C0-3.3605499%2C0.7474995-4.0250015%2C1.1755552l-1.1180496-2.7727776%0A%09c1.1180496-0.5622225%2C3.1752701-1.3352776%2C5.6286087-1.3352776c2.453331%2C0%2C3.8652725%2C0.5622225%2C4.9066696%2C1.5205564%0A%09c1.015831%2C0.958333%2C1.5716629%2C2.2424994%2C1.5716629%2C4.4530554v7.3663902H96.8816605z%20M92.6458359%2C17.4177761l-2.1083374%2C0.1341686%0A%09c-1.3097229%2C0.0511093-2.0827713%2C0.6133327-2.0827713%2C1.5972214c0%2C1.0158329%2C0.8241653%2C1.6291676%2C1.9997253%2C1.6291676%0A%09c1.1436081%2C0%2C1.9230499-0.7475014%2C2.1849899-1.2011108v-2.1594467H92.6458359z%20M84.1869431%2C10.0705557l-5.3922272%2C13.0908346%0A%09h-3.980278l-5.3602753-13.0908337h4.4338837l2.9708328%2C8.2800007l2.945282-8.2800007h4.382782V10.0705557z%20M68.3233261%2C23.1550007%0A%09h-4.2486115v-13.084445h4.2486115V23.1550007z%20M64.0747147%2C8.9652777V4.1672225h5.2069473L64.0747147%2C8.9652777z%0A%20%20M97.6291656%2C10.0386114c-0.5111084%2C0-0.9136124-0.3961115-0.9136124-0.9136114s0.402504-0.9136114%2C0.9136124-0.9136114%0A%20%20c0.5175018%2C0%2C0.9136124%2C0.3961115%2C0.9136124%2C0.9136114C98.5427704%2C9.6361113%2C98.140274%2C10.0386114%2C97.6291656%2C10.0386114z%0A%20%20M97.6291656%2C8.3455553c-0.4344482%2C0-0.7794418%2C0.3386116-0.7794418%2C0.7794447c0%2C0.4344444%2C0.3386154%2C0.7794447%2C0.7794418%2C0.7794447%0A%20%20c0.440834%2C0%2C0.7794418-0.3386116%2C0.7794418-0.7794447C98.4022217%2C8.6841669%2C98.0699921%2C8.3455553%2C97.6291656%2C8.3455553z%0A%20%20M98.0827789%2C9.6552782h-0.2619476l-0.2236099-0.4216671h-0.1086044v0.4216671h-0.2172241V8.5819445h0.3769455%0A%20%20c0.2363815%2C0%2C0.3833313%2C0.1213884%2C0.3833313%2C0.3194447c0%2C0.2044439-0.1341629%2C0.2811108-0.2172241%2C0.3002777L98.0827789%2C9.6552782z%0A%20%20M97.6163864%2C8.7672215h-0.1213913v0.29389h0.1213913c0.1022186%2C0%2C0.1916656-0.0255556%2C0.1916656-0.146945%0A%20%20C97.8080521%2C8.792778%2C97.718605%2C8.7672215%2C97.6163864%2C8.7672215z%22%2F%3E%0A%3C%2Fsvg%3E')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundColor: "rgba(0, 0, 0, 0)",
                width: "100%",
                height: "100%",
                backgroundSize: "auto 21px",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.11)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                animation: "animation-pulse 2s ease-in-out 0.5s infinite",
              }}
            ></div>
            <div
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.11)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                marginLeft: "20px",
              }}
            ></div>
            <div
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.11)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                marginLeft: "20px",
              }}
            ></div>
            <div
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.11)",
                width: "160px",
                height: "34px",
                borderRadius: "4px",
                animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                marginLeft: "20px",
                marginRight: "5px",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "99vh",
            backgroundColor: "#fff",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderRight: "1px solid rgba(0, 0, 0, 0.16)",
              width: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.16)",
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "65%",
                  height: "20px",
                  borderRadius: "4px",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "44px",
              }}
            >
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "65%",
                  height: "20px",
                  borderRadius: "4px",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "44px",
              }}
            >
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "65%",
                  height: "20px",
                  borderRadius: "4px",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "44px",
              }}
            >
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "65%",
                  height: "20px",
                  borderRadius: "4px",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "15px",
                }}
              ></div>
            </div>
          </div>
          <div 
          style ={{
            backgroundColor: '#fff',
            width: '80%'
          }}
          >
          <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "160px",
                  height: "24px",
                  borderRadius: "4px",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "20px",
                  marginTop: "20px"
                }}
              ></div>
              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.11)",
                  width: "320px",
                  height: "12px",
                  borderRadius: "4px",
                  animation: "animation-pulse 2s ease-in-out 0.5s infinite",
                  marginLeft: "20px",
                  marginTop: "10px"
                }}
              ></div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
