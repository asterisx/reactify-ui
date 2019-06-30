const declaredCode = `
<HeirarchyView className="font-responsive">
  <HeirarchyView.Item content={<Paper className="p-3" large warning>L0</Paper>}>
    <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
      <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
        <Paper className="p-3" large>L3</Paper>
      </HeirarchyView.Item>

      <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
        <Paper className="p-3" large>L3</Paper>
        <Paper className="p-3" large>L3</Paper>
      </HeirarchyView.Item>
    </HeirarchyView.Item>

    <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
      <Paper className="p-3" large>L2</Paper>
    </HeirarchyView.Item>
  </HeirarchyView.Item>
</HeirarchyView>
`;

const declaredVerticalCode = `
<HeirarchyView className="font-responsive">
   <HeirarchyView.Item vertical content={<Paper className="p-3" large warning>L0</Paper>}>
     <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
       <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
         <Paper className="p-3" large>L3</Paper>
       </HeirarchyView.Item>
       
       <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
         <Paper className="p-3" large>L3</Paper>
         <Paper className="p-3" large>L3</Paper>
       </HeirarchyView.Item>
     </HeirarchyView.Item>

     <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
       <Paper className="p-3" large>L2</Paper>
     </HeirarchyView.Item>
   </HeirarchyView.Item>
 </HeirarchyView>
`;

const simpleCode = `
const item = {
  text: 'L0',
  key: 1,
  sub: [
    {
      text: 'L1',
      key: 2,
      sub: {
        text: 'L3',
        key: 3,
      },
    },
    {
      text: 'L1',
      key: 4,
      sub: [
        {
          content: <Paper>L3</Paper>,
          key: 5,
        },
        {
          text: 'L3',
          key: 6,
        },
      ],
    },
  ],
};

<HeirarchyView className="font-responsive" item={item} />
`;

export {
  declaredCode,
  declaredVerticalCode,
  simpleCode,
};
