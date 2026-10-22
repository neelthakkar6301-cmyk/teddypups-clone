export default function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 200 210" role="img" aria-label="TeddyPups front-facing puppy mascot" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#2d1a0e" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {/* Front paws and chest peek over the scalloped edge. */}
        <path d="M61 164 C58 151 62 141 72 137 L128 137 C138 141 142 151 139 164 L130 183 L70 183Z" fill="#f2b866" />
        <path d="M77 158 Q75 169 80 177 M123 158 Q125 169 120 177" fill="none" stroke="#d9994f" strokeWidth="3" />
        <path d="M63 137 Q100 158 137 137 L134 151 Q100 172 66 151Z" fill="#bd4c32" />
        <path d="M96 157 L100 154 L104 157 L100 164Z" fill="#f3bd65" strokeWidth="2.5" />

        {/* Long fluffy ears frame the rounded face. */}
        <path d="M48 76 C30 65 25 88 31 113 C35 133 48 146 62 137 L70 105Z" fill="#e9a255" />
        <path d="M152 76 C170 65 175 88 169 113 C165 133 152 146 138 137 L130 105Z" fill="#e9a255" />
        <path d="M43 91 C37 91 40 116 49 126 Q56 132 60 124 L57 99Z" fill="#f2b866" stroke="none" />
        <path d="M157 91 C163 91 160 116 151 126 Q144 132 140 124 L143 99Z" fill="#f2b866" stroke="none" />

        {/* Fluffy head silhouette and crown curl. */}
        <path d="M100 18 C92 9 80 12 78 22 C66 19 59 27 61 37 C48 38 43 50 49 59 C37 66 36 81 43 89 C35 101 40 113 48 118 C47 133 57 141 69 139 C76 151 91 151 100 144 C109 151 124 151 131 139 C143 141 153 133 152 118 C160 113 165 101 157 89 C164 81 163 66 151 59 C157 50 152 38 139 37 C141 27 134 19 122 22 C120 12 108 9 100 18Z" fill="#f2b866" />
        <path d="M81 15 C80 7 89 5 94 9 C98 1 110 1 114 9 C122 5 130 11 126 19 C122 26 88 26 81 19Z" fill="#f2b866" />

        {/* Face */}
        <ellipse cx="100" cy="101" rx="37" ry="30" fill="#fff0d6" stroke="none" />
        <circle cx="62" cy="99" r="9" fill="#f6a4a0" stroke="none" opacity="0.78" />
        <circle cx="138" cy="99" r="9" fill="#f6a4a0" stroke="none" opacity="0.78" />
        <g className="mascot-eyes-open" fill="#2d1a0e" stroke="none">
          <ellipse cx="78" cy="78" rx="9" ry="12" />
          <ellipse cx="122" cy="78" rx="9" ry="12" />
          <circle cx="80" cy="75" r="3" fill="#fff" />
          <circle cx="124" cy="75" r="3" fill="#fff" />
        </g>
        <g className="mascot-eyes-shut" fill="none" stroke="#2d1a0e" strokeWidth="3">
          <path d="M69 80 Q78 73 87 80" />
          <path d="M113 80 Q122 73 131 80" />
        </g>
        <path d="M91 94 Q100 88 109 94 Q108 104 100 104 Q92 104 91 94Z" fill="#2d1a0e" />
        <path d="M100 104 V111 M89 115 Q100 127 111 115" fill="none" />
      </g>
    </svg>
  );
}
