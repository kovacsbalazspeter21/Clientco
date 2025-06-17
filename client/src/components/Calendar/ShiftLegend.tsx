type ShiftType = 'rest' | 'vacation' | 'sick' | 'meeting' | null;

const shiftColors: Record<ShiftType, string> = {
  rest: '#b3e5fc',
  vacation: '#c8e6c9',
  sick: '#ffcdd2',
  meeting: '#bbdefb',
  null: '#fff',
};

type Props = {
  dayType: ShiftType;
  hasMeeting?: boolean;
};

export default function ShiftLegend({ dayType, hasMeeting }: Props) {
  let background: string = shiftColors[dayType] || '#fff';

  if (dayType && hasMeeting && dayType !== 'meeting') {
    background = `linear-gradient(90deg, ${shiftColors[dayType] || '#fff'} 60%, ${shiftColors.meeting} 100%)`;
  }

  return (
    <div
      style={{
        background,
        borderRadius: 10,
        padding: '0.6em 1.2em',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        margin: '1em 0',
        fontWeight: 500,
        boxShadow: '0 2px 8px #1976d220',
      }}
    >
      {dayType === 'rest' && <span>Pihenőnap</span>}
      {dayType === 'vacation' && <span>Szabadság</span>}
      {dayType === 'sick' && <span>Táppénz</span>}
      {dayType === 'meeting' && <span>Meeting</span>}
      {hasMeeting && dayType !== 'meeting' && <span>+ Meeting</span>}
      {!dayType && <span>Nincs adat</span>}
    </div>
  );
}