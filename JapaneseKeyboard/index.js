function add()
{
    // Const input
    const input = document.getElementById("t1").value;

    // Const Romaji
    // あ行
    const a = 'あ';
    const i = 'い';
    const u = 'う';
    const e = 'え';
    const o = 'お';
    // か行
    const ka = 'か';
    const ki = 'き';
    const ku = 'く';
    const ke = 'け';
    const ko = 'こ';
    // さ行
    const sa = 'さ';
    const si = 'し';
    const su = 'す';
    const se = 'せ';
    const so = 'そ';
    // た行
    const ta = 'た';
    const ti = 'ち';
    const tu = 'つ';
    const te = 'て';
    const to = 'と';
    // な行
    const na = 'な';
    const ni = 'に';
    const nu = 'ぬ';
    const ne = 'ね';
    const no = 'の';
    // は行
    const ha = 'は';
    const hi = 'ひ';
    const hu = 'ふ';
    const fu = 'ふ';
    const he = 'へ';
    const ho = 'ほ';
    // ま行
    const ma = 'ま';
    const mi = 'み';
    const mu = 'む';
    const me = 'め';
    const mo = 'も';
    // や行
    const ya = 'や';
    const yu = 'ゆ';
    const yo = 'よ';
    // ら行
    const ra = 'ら';
    const ri = 'り';
    const ru = 'る';
    const re = 'れ';
    const ro = 'ろ';
    // わ行
    const wa = 'わ';
    const wo = 'を';
    const nn = 'ん';

    // Exception Romaji

    // 小さい文字    34
    const xa = 'ぁ';
    const xi = 'ぃ';
    const xu = 'ぅ';
    const xe = 'ぇ';
    const xo = 'ぉ';
    const xtu = 'っ';
    const xya = 'ゃ';
    const xyu = 'ゅ';
    const xyo = 'ょ';
    // が行
    const ga = 'が';
    const gi = 'ぎ';
    const gu = 'ぐ';
    const ge = 'げ';
    const go = 'ご';
    // ざ行
    const za = 'ざ';
    const zi = 'じ';
    const zu = 'ず';
    const ze = 'ぜ';
    const zo = 'ぞ';
    // だ行
    const da = 'だ';
    const di = 'ぢ';
    const du = 'づ';
    const de = 'で';
    const doo = 'ど';
    // ば行
    const ba = 'ば';
    const bi = 'び';
    const bu = 'ぶ';
    const be = 'べ';
    const bo = 'ぼ';
    // ぱ行
    const pa = 'ぱ';
    const pi = 'ぴ';
    const pu = 'ぷ';
    const pe = 'ぺ';
    const po = 'ぽ';



    // Result info
    // あ行
    if(input=='a'){
        document.write('<h1>'+a+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='i'){
        document.write('<h1>'+i+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='u'){
        document.write('<h1>'+u+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='e'){
        document.write('<h1>'+e+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='o'){
        document.write('<h1>'+o+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // か行 ----
    if(input=='ka'){
        document.write('<h1>'+ka+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ki'){
        document.write('<h1>'+ki+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ku'){
        document.write('<h1>'+ku+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ke'){
        document.write('<h1>'+ke+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ko'){
        document.write('<h1>'+ko+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // さ行 ----
    if(input=='sa'){
        document.write('<h1>'+sa+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='si'){
        document.write('<h1>'+si+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='su'){
        document.write('<h1>'+su+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='se'){
        document.write('<h1>'+se+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='so'){
        document.write('<h1>'+so+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // た行 ----
    if(input=='ta'){
        document.write('<h1>'+ta+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ti'){
        document.write('<h1>'+ti+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='tu'){
        document.write('<h1>'+tu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='te'){
        document.write('<h1>'+te+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='to'){
        document.write('<h1>'+to+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // な行
    if(input=='na'){
        document.write('<h1>'+na+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ni'){
        document.write('<h1>'+ni+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='nu'){
        document.write('<h1>'+nu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ne'){
        document.write('<h1>'+ne+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='no'){
        document.write('<h1>'+no+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // は行 ----
    if(input=='ha'){
        document.write('<h1>'+ha+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='hi'){
        document.write('<h1>'+hi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='hu'){
        document.write('<h1>'+hu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='fu'){
        document.write('<h1>'+fu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='he'){
        document.write('<h1>'+he+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ho'){
        document.write('<h1>'+ho+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // ま行 ----
    if(input=='ma'){
        document.write('<h1>'+ma+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='mi'){
        document.write('<h1>'+mi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='mu'){
        document.write('<h1>'+mu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='me'){
        document.write('<h1>'+me+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='mo'){
        document.write('<h1>'+mo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // や行 ----
    if(input=='ya'){
        document.write('<h1>'+ya+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='yu'){
        document.write('<h1>'+yu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='yo'){
        document.write('<h1>'+yo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // ら行 ----
    if(input=='ra'){
        document.write('<h1>'+ra+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ri'){
        document.write('<h1>'+ri+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ru'){
        document.write('<h1>'+ru+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='re'){
        document.write('<h1>'+re+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ro'){
        document.write('<h1>'+ro+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // わ行 ----
    if(input=='wa'){
        document.write('<h1>'+wa+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='wo'){
        document.write('<h1>'+wo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='nn'){
        document.write('<h1>'+nn+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // 小さい文字 ----
    if(input=='xa'){
        document.write('<h1>'+xa+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xi'){
        document.write('<h1>'+xi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xu'){
        document.write('<h1>'+xu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xe'){
        document.write('<h1>'+xe+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xo'){
        document.write('<h1>'+xo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xtu'){
        document.write('<h1>'+xtu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xya'){
        document.write('<h1>'+xya+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xyu'){
        document.write('<h1>'+xyu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='xyo'){
        document.write('<h1>'+xyo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // が行 ----
    if(input=='ga'){
        document.write('<h1>'+ga+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='gi'){
        document.write('<h1>'+gi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='gu'){
        document.write('<h1>'+gu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ge'){
        document.write('<h1>'+ge+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='go'){
        document.write('<h1>'+go+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // ざ行
    if(input=='za'){
        document.write('<h1>'+za+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='zi'){
        document.write('<h1>'+zi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ji'){
        document.write('<h1>'+zi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='zu'){
        document.write('<h1>'+zu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='ze'){
        document.write('<h1>'+ze+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='zo'){
        document.write('<h1>'+zo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // だ行 ----
    if(input=='da'){
        document.write('<h1>'+da+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='di'){
        document.write('<h1>'+di+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='du'){
        document.write('<h1>'+du+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='de'){
        document.write('<h1>'+de+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='do'){
        document.write('<h1>'+doo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // ば行 ----
    if(input=='ba'){
        document.write('<h1>'+ba+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='bi'){
        document.write('<h1>'+bi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='bu'){
        document.write('<h1>'+bu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='be'){
        document.write('<h1>'+be+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='bo'){
        document.write('<h1>'+bo+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }

    // ぱ行 ----
    if(input=='pa'){
        document.write('<h1>'+pa+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='pi'){
        document.write('<h1>'+pi+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='pu'){
        document.write('<h1>'+pu+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='pe'){
        document.write('<h1>'+pe+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
    if(input=='po'){
        document.write('<h1>'+po+'</h1><br>');
        document.write('<form action="./index.html"><input type="submit" value="Again" /></form>')
    }
}
