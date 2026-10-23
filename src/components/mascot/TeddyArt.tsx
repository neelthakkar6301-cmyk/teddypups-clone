import type { CSSProperties } from "react";

/** Teddy, the TeddyPups mascot. Side view faces right; flip with CSS when facing left. */
export function TeddySide() {
  return (
    <svg className="teddy teddy--side" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#2a170e" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M79 119 Q65 108 55 111" fill="none" />
        <path className="teddy__tail" d="M54 115 C47 120 40 116 41 110 C32 108 31 100 36 95 C32 87 39 81 47 84 C51 75 61 78 64 84 C73 81 79 88 75 96 C82 102 77 110 70 111 C68 119 59 120 54 115Z" fill="#f2be6b" />
        <path className="teddy__leg teddy__leg--b" d="M83 148 Q76 160 78 178 Q82 185 91 181 L99 151Z" fill="#e9a255" />
        <path className="teddy__leg teddy__leg--a" d="M105 153 Q100 163 103 180 Q108 185 117 181 L120 151Z" fill="#f2be6b" />
        <ellipse cx="119" cy="133" rx="64" ry="39" fill="#f2be6b" />
        <path d="M135 58 C119 38 108 48 114 71 C117 88 126 100 139 94 Q149 80 151 64Z" fill="#f2be6b" />
        <path d="M124 57 C117 51 116 63 122 76 Q127 87 134 86 Q141 78 142 70Z" fill="#e9a255" stroke="none" />
        <path className="teddy__ear" d="M199 55 C218 36 234 48 230 72 C228 91 219 102 207 94 Q199 79 197 64Z" fill="#f2be6b" />
        <path d="M209 55 C219 50 226 58 222 74 Q219 86 212 88 Q205 79 204 69Z" fill="#e9a255" stroke="none" />
        <path d="M150 46 Q151 29 166 31 Q179 20 191 31 Q207 28 208 46 Q188 40 170 45 Q160 47 150 46Z" fill="#f2be6b" />
        <path d="M137 84 C137 57 154 39 179 39 C205 39 222 57 222 83 C222 109 205 128 180 128 C155 128 137 110 137 84Z" fill="#f2be6b" />
        <g transform="translate(40 33) scale(0.78 0.75)">
          <path d="M143 119 Q177 137 216 116 L212 132 Q179 151 147 135Z" fill="#a24a1a" />
          <path d="M181 139 L186 135 L191 139 L186 146Z" fill="#f2be6b" strokeWidth="2.5" />
        </g>
        <path className="teddy__leg teddy__leg--a" d="M147 147 Q140 161 143 180 Q148 186 158 181 L164 144Z" fill="#f2be6b" />
        <path className="teddy__leg teddy__leg--b" d="M170 144 Q166 160 169 180 Q175 186 184 181 L184 139Z" fill="#e9a255" />
        <ellipse cx="180" cy="101" rx="26" ry="20" fill="#fff0d6" />
        <circle cx="157" cy="94" r="7" fill="#f6a4a0" stroke="none" opacity="0.82" />
        <circle cx="203" cy="94" r="7" fill="#f6a4a0" stroke="none" opacity="0.82" />
        <g className="teddy__eyes" fill="#2a170e" stroke="none">
          <ellipse cx="165" cy="73" rx="5.2" ry="7" />
          <ellipse cx="194" cy="73" rx="5.2" ry="7" />
          <circle cx="166.5" cy="71" r="1.8" fill="#fff" />
          <circle cx="195.5" cy="71" r="1.8" fill="#fff" />
        </g>
        <path d="M174 89 H186 Q186 98 180 98 Q174 98 174 89Z" fill="#2a170e" />
        <path d="M180 98 V104 M171 107 Q180 115 189 107" fill="none" />
        <path d="M144 86 Q141 99 146 111 M215 84 Q220 99 214 111" fill="none" stroke="#d9994f" strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Front view, peeking over an edge with both paws (hero quilt, footer basket). */
export function TeddyFront() {
  return (
    <svg className="teddy teddy--front" viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#2a170e" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M61 164 C58 151 62 141 72 137 L128 137 C138 141 142 151 139 164 L130 183 L70 183Z" fill="#f2be6b" />
        <path d="M63 137 Q100 158 137 137 L134 151 Q100 172 66 151Z" fill="#a24a1a" />
        <path d="M96 157 L100 154 L104 157 L100 164Z" fill="#f2be6b" strokeWidth="2.5" />
        <path d="M48 76 C30 65 25 88 31 113 C35 133 48 146 62 137 L70 105Z" fill="#e9a255" />
        <path className="teddy__ear" d="M152 76 C170 65 175 88 169 113 C165 133 152 146 138 137 L130 105Z" fill="#e9a255" />
        <path d="M100 18 C92 9 80 12 78 22 C66 19 59 27 61 37 C48 38 43 50 49 59 C37 66 36 81 43 89 C35 101 40 113 48 118 C47 133 57 141 69 139 C76 151 91 151 100 144 C109 151 124 151 131 139 C143 141 153 133 152 118 C160 113 165 101 157 89 C164 81 163 66 151 59 C157 50 152 38 139 37 C141 27 134 19 122 22 C120 12 108 9 100 18Z" fill="#f2be6b" />
        <path d="M81 15 C80 7 89 5 94 9 C98 1 110 1 114 9 C122 5 130 11 126 19 C122 26 88 26 81 19Z" fill="#f2be6b" />
        <ellipse cx="100" cy="101" rx="37" ry="30" fill="#fff0d6" stroke="none" />
        <circle cx="62" cy="99" r="9" fill="#f6a4a0" stroke="none" opacity="0.78" />
        <circle cx="138" cy="99" r="9" fill="#f6a4a0" stroke="none" opacity="0.78" />
        <g className="teddy__eyes" fill="#2a170e" stroke="none">
          <ellipse cx="78" cy="78" rx="9" ry="12" />
          <ellipse cx="122" cy="78" rx="9" ry="12" />
          <circle cx="80" cy="75" r="3" fill="#fff" />
          <circle cx="124" cy="75" r="3" fill="#fff" />
        </g>
        <path d="M91 94 Q100 88 109 94 Q108 104 100 104 Q92 104 91 94Z" fill="#2a170e" />
        <path d="M100 104 V111 M89 115 Q100 127 111 115" fill="none" />
        <path d="M72 186 C64 186 60 178 66 172 C72 166 84 168 86 176 C87 182 80 186 72 186Z M128 186 C120 186 113 182 114 176 C116 168 128 166 134 172 C140 178 136 186 128 186Z" fill="#f2be6b" />
      </g>
    </svg>
  );
}

/** Paw print path in a 64×64 box. */
export const PAW_PATH = "M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM14.6 22.3c-3 .1-5.6 3.3-5.6 7s2.6 6.9 5.6 6.9 5.6-3.2 5.6-6.9-2.6-7-5.6-7zM24.2 9.3c-3 0-5.6 3.3-5.6 7.3s2.5 7.3 5.6 7.3 5.6-3.3 5.6-7.3-2.5-7.3-5.6-7.3zM39.8 9.3c-3.1 0-5.6 3.3-5.6 7.3s2.5 7.3 5.6 7.3 5.6-3.3 5.6-7.3-2.5-7.3-5.6-7.3zM49.4 22.3c-3 0-5.6 3.3-5.6 7s2.6 6.9 5.6 6.9 5.6-3.2 5.6-6.9-2.6-7-5.6-7z";

/** Small paw print, used for nav markers, footprints and decorations. */
export function PawPrint({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path fill="currentColor" d={PAW_PATH} />
    </svg>
  );
}

/** Four-point sparkle star used in the night scenes. */
export function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" aria-hidden="true">
      <path fill="currentColor" d="M20 2 C21.5 13 27 18.5 38 20 C27 21.5 21.5 27 20 38 C18.5 27 13 21.5 2 20 C13 18.5 18.5 13 20 2Z" />
    </svg>
  );
}
