import useChangeInputField from '../../hooks/useChangeInputField';
import { ModalButton } from '../../styles/ButtonStyle';
import { ButtonsWrap, InputField, ModalFormWrap, Overlay } from '../../styles/ModalFormStyle';

type ModalFormProps = {
  onClose: () => void;
  onClickConfirm: (inputField: string) => void;
};

export default function ModalForm({ onClose, onClickConfirm }: ModalFormProps) {
  const { inputField, handleChangeInputField } = useChangeInputField();

  return (
    <Overlay>
      <ModalFormWrap>
        <p>비밀번호</p>
        <>
          <InputField
            id="password"
            type="password"
            value={inputField}
            maxLength={4}
            onChange={(e) => handleChangeInputField(e)}
            placeholder={'최대 4자까지 입력이 가능해요'}
          />
          <ButtonsWrap>
            <ModalButton isColor={false} onClick={onClose}>
              취소
            </ModalButton>
            <ModalButton isColor={true} onClick={() => onClickConfirm(inputField)}>
              확인
            </ModalButton>
          </ButtonsWrap>
        </>
      </ModalFormWrap>
    </Overlay>
  );
}
