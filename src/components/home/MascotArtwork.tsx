interface Props { className?: string; label?: boolean }

export default function MascotArtwork({ className = "", label = false }: Props) {
  return (
    <svg className={className} viewBox="0 0 240 190" role={label ? "img" : undefined} aria-label={label ? "TeddyPups fluffy puppy mascot" : undefined} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#2d1a0e" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M79 119 Q65 108 55 111" fill="none" />
        <path className="mascot-tail walker-tail" d="M54 115 C47 120 40 116 41 110 C32 108 31 100 36 95 C32 87 39 81 47 84 C51 75 61 78 64 84 C73 81 79 88 75 96 C82 102 77 110 70 111 C68 119 59 120 54 115Z" fill="#f2b866" />
        <path className="walker-leg walker-leg--b mascot-leg mascot-leg--rear" d="M83 148 Q76 160 78 178 Q82 185 91 181 L99 151Z" fill="#e9a255" />
        <path className="walker-leg walker-leg--a mascot-leg mascot-leg--rear" d="M105 153 Q100 163 103 180 Q108 185 117 181 L120 151Z" fill="#f2b866" />
        <ellipse cx="119" cy="133" rx="64" ry="39" fill="#f2b866" />
        <path d="M135 58 C119 38 108 48 114 71 C117 88 126 100 139 94 Q149 80 151 64Z" fill="#f2b866" />
        <path d="M124 57 C117 51 116 63 122 76 Q127 87 134 86 Q141 78 142 70Z" fill="#e9a255" stroke="none" />
        <path d="M199 55 C218 36 234 48 230 72 C228 91 219 102 207 94 Q199 79 197 64Z" fill="#f2b866" />
        <path d="M209 55 C219 50 226 58 222 74 Q219 86 212 88 Q205 79 204 69Z" fill="#e9a255" stroke="none" />
        <path d="M150 46 Q151 29 166 31 Q179 20 191 31 Q207 28 208 46 Q188 40 170 45 Q160 47 150 46Z" fill="#f2b866" />
        <path d="M137 84 C137 57 154 39 179 39 C205 39 222 57 222 83 C222 109 205 128 180 128 C155 128 137 110 137 84Z" fill="#f2b866" />
        <g transform="translate(40 33) scale(0.78 0.75)">
          <path d="M143 119 Q177 137 216 116 L212 132 Q179 151 147 135Z" fill="#bd4c32" />
          <path d="M181 139 L186 135 L191 139 L186 146Z" fill="#f3bd65" strokeWidth="2.5" />
        </g>
        <path className="walker-leg walker-leg--a mascot-leg mascot-leg--front" d="M147 147 Q140 161 143 180 Q148 186 158 181 L164 144Z" fill="#f2b866" />
        <path className="walker-leg walker-leg--b mascot-leg mascot-leg--front" d="M170 144 Q166 160 169 180 Q175 186 184 181 L184 139Z" fill="#e9a255" />
        <ellipse cx="180" cy="101" rx="26" ry="20" fill="#fff0d6" />
        <circle cx="157" cy="94" r="7" fill="#f6a4a0" stroke="none" opacity="0.82" />
        <circle cx="203" cy="94" r="7" fill="#f6a4a0" stroke="none" opacity="0.82" />
        <g className="mascot-eyes-open" fill="#2d1a0e" stroke="none">
          <ellipse cx="165" cy="73" rx="5.2" ry="7" />
          <ellipse cx="194" cy="73" rx="5.2" ry="7" />
          <circle cx="166.5" cy="71" r="1.8" fill="#fff" />
          <circle cx="195.5" cy="71" r="1.8" fill="#fff" />
        </g>
        <g className="mascot-eyes-shut" fill="none" stroke="#2d1a0e" strokeWidth="2.5">
          <path d="M159 75 Q165 70 171 75" />
          <path d="M188 75 Q194 70 200 75" />
        </g>
        <path d="M174 89 H186 Q186 98 180 98 Q174 98 174 89Z" fill="#2d1a0e" />
        <path d="M180 98 V104 M171 107 Q180 115 189 107" fill="none" />
        <path d="M144 86 Q141 99 146 111 M215 84 Q220 99 214 111" fill="none" stroke="#d9994f" strokeWidth="2" />
      </g>
    </svg>
  );
}
