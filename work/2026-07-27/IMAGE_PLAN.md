# ISSUE 02 IMAGE PLAN

상태: IN_REVIEW / GENERATION_RETRY_REQUIRED

회차: 2026-07-27—2026-08-02
기준: `editorial/IMAGE_DIRECTION.md`, `work/2026-07-27/LAYOUT_PLAN.md`

## 현재 판정

13 이미지 제작을 실제로 시작했으나 **아직 승인 가능한 이미지 파일은 0개**다. 따라서 `IMAGES: COMPLETE`로 닫지 않는다.

이번 실행에서 이미지 생성 모델에 독립 사진 8개를 요구했지만, 반복해서 8칸 연락시트·스토리보드·잡지형 제작 보드가 생성됐다. 생성 결과 내부에 기사명·숫자·가격표·온도계·시계·국기·인포그래픽·UI가 포함되어 현행 `IMAGE_DIRECTION.md`의 절대 금지 조건을 위반했다. 연락시트 안의 개별 패널은 원본 해상도가 작아 단순 크롭·확대로 1600/1800px 규격을 맞추는 것도 `저해상도 썸네일 확대` 금지 기준에 걸리므로 현행 자산으로 채택하지 않는다.

대체 경로로 단독 1920×1080 Canva 생성 후보도 시험했으나, 내부 검수 결과 하나의 사진이 아니라 여러 이미지 fill과 `2025` 텍스트 요소가 결합된 디자인이었다. 이 역시 현행 주요 기사 이미지로 채택하지 않는다.

**중요:** 이번 실패 결과를 `archive/2026-07-27/assets/`에 임시 이미지로 넣지 않는다. HTML 단계로도 넘어가지 않는다.

## 공통 규칙

각 결과는 **독립된 한 장의 사진적 에디토리얼 이미지**여야 한다.

- 이미지 팩·연락시트·무드보드·잡지 지면·인포그래픽·분할 패널 금지
- 이미지 내부 글자·숫자·로고·워터마크 금지
- 벡터·플랫·아이소메트릭·기업용 3D 몽타주 금지
- 실제 사건 현장이나 실존 인물을 정확히 재현한 것처럼 만들지 않음
- Cover 장변 1800px 이상, 나머지 장변 1600px 이상
- 실제 파일을 열어 인체·장비·문서·반사면 오류와 모바일 크롭을 육안 확인

## 1. cover.webp

Korean urban neighborhood during an extreme summer heatwave, late afternoon, hard sunlight, shimmering hot air above asphalt, sparse pedestrians in shade, public cooling shelter or shaded rest area subtly visible, realistic city textures and humidity. Wide environmental scene, no identifiable real location or person. Strong title-safe negative space on the left/lower-left; visual tension on the right. No thermometer graphic, no text, no numbers, no readable signs, no logo, no watermark, no infographic, no split panels, no magazine layout.

## 2. life-scene.webp

Early weekday morning outside a generic Korean community childcare center just before opening; a non-identifiable parent and elementary-school child wait quietly near the entrance or in a parked car, school-break bag and water bottle present, subtle sense of being early and watching the closed door. Natural ordinary clothing, restrained expressions, candid camera perspective, warm but slightly tense morning light. No clocks, readable signage, text, numbers, logos, watermark, infographic, split panels, or magazine layout.

## 3. cover-story.webp

Closer heatwave-response scene distinct from the cover: a shaded public rest area in a Korean city during severe heat, bottled water/cooling supplies and shaded seating, nearby outdoor worker or resident resting in the shade without identifiable face, harsh sun visible beyond the shelter. Focus on how a nationwide heat alert translates into a concrete local protective action. No readable signs, text, numbers, logos, thermometer graphic, watermark, infographic, split panels, or magazine layout.

## 4. economy.webp

Physical petroleum distribution scene in Korea: fuel tanker truck unloading into a service-station storage connection or refinery/distribution loading bay, hoses and metal fittings in sharp realistic detail, worker present only if non-identifiable and safely equipped. Emphasize supply-chain stage before retail price reaches motorists. No price board, readable text, numbers, logos, brand marks, watermark, infographic, split panels, or magazine layout.

## 5. politics.webp

Formal bilateral government consultation setting inspired by Korea–Brazil diplomacy without depicting actual leaders: long conference table, blank folders, translation headsets, water glasses, aides or officials seen from behind/side with non-identifiable faces, modern government meeting room. Mood of documents and follow-up work after a summit, not a ceremonial handshake. No readable document text, no logos, no exact flags, no watermark, no infographic, no split panels, no magazine layout.

## 6. deep-dive-politics.webp

Realistic trade and customs workflow scene suggesting the long path from agreement to implementation: port or customs office overlooking container terminal, blank trade documents being reviewed on a desk, containers and cranes softly visible through glass, hands turning pages, subdued sense of time created naturally through light and composition rather than a literal hourglass. No maps with labels, no logos, no readable text, no numbers, no watermark, no infographic, no split panels, no magazine layout.

## 7. society.webp

Generic Korean community childcare room during summer break opening hours, children arriving or settling in while a caregiver prepares the space or simple meal, warm everyday environment, cubbies and bags, natural candid moment, no identifiable real children. Focus on the service operating in real time rather than abstract policy. No clocks, readable signage, text, numbers, logos, watermark, infographic, split panels, or magazine layout.

## 8. tech.webp

High-detail semiconductor/nanofabrication cleanroom interior with a large realistic process or metrology tool as the central subject; a researcher in cleanroom suit seen from the side/back operating or inspecting equipment, institution-neutral. Emphasize physical shared research infrastructure and equipment access, not futuristic sci-fi. No readable screen text, logos, numbers, watermark, infographic, split panels, or magazine layout.

## 검수 게이트

각 파일은 다음을 모두 통과한 뒤에만 `archive/2026-07-27/assets/`의 현행 이미지로 인정한다.

- [ ] 실제 이미지 생성 모델의 독립 이미지 결과
- [ ] Cover 장변 1800px 이상 / 나머지 1600px 이상
- [ ] 저해상도 연락시트 패널 확대가 아님
- [ ] 텍스트·숫자·로고·워터마크 없음
- [ ] 벡터·플랫·아이소메트릭·인포그래픽풍 아님
- [ ] 얼굴·손·장비·문서·반사면 생성 오류 없음
- [ ] 기사와 직접 연결되는 한 장면
- [ ] 같은 회차 다른 이미지와 의미·구도 중복 없음
- [ ] 데스크톱·모바일 크롭 안전영역 확인
- [ ] 필요한 대체 텍스트·`편집용 생성 이미지` 고지 준비

현재 판정: **RETRY REQUIRED — HTML 단계 이동 금지**
