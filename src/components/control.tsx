import * as React from 'react';
import {
  IDropdownOption,
  Stack,
  PrimaryButton,
  TextField,
  Checkbox,
  Dropdown
} from 'office-ui-fabric-react';
import * as masiide from 'masiide';
import { IFilesystemContentChange } from '@masiide/types';
import { toUri } from '../libs/utils/toUri';

import styles from './control.less';

export const Controls = () => {
  const { masiideProxyImpl } = masiide;

  const fileName = 'Storage.sol';

  const fileUri = React.useMemo(() => {
    const currentProject = masiideProxyImpl.currentProject;
    return toUri(currentProject.currentProjectId, fileName);
  }, [masiideProxyImpl.currentProject]);

  const [fileContent, setFileContent] = React.useState('');
  const callApiFunction = masiideProxyImpl.getApiFunction(
    'masiide-pluginId.testFunction'
  );

  const updateContentInPlugin = React.useCallback(() => {
    masiideProxyImpl.fileSystemService
      .readFileString(fileUri)
      .then((res) => {
        setFileContent(res);
      })
      .catch((e) => console.log(e));
  }, [masiideProxyImpl.fileSystemService, fileUri]);

  // 监听文件更新
  React.useEffect(() => {
    const contentChange =
      masiideProxyImpl.fileSystemService.onFileContentChange(
        ({ uri }: IFilesystemContentChange) => {
          console.log(fileUri, uri);
          if (fileUri === uri) {
            updateContentInPlugin();
          }
        }
      );

    return () => contentChange.dispose();
  }, [masiideProxyImpl.fileSystemService, fileUri, updateContentInPlugin]);

  React.useEffect(() => {
    console.log('update file');
    updateContentInPlugin();
  }, [updateContentInPlugin]);

  return (
    <div className={styles.controls}>
      <Stack
        tokens={{ childrenGap: 15 }}
        styles={{ root: { paddingBottom: '15px' } }}
      >
        <Dropdown
          label="dropDown"
          onChanged={handleSelectNetwork}
          options={[
            {
              key: 'option1',
              text: 'option1'
            }
          ]}
        />

        <Checkbox label="test checkbox" name="DryRun" />

        <TextField label="test input" />

        <PrimaryButton onClick={() => callApiFunction() as void}>
          test button
        </PrimaryButton>

        <pre>{fileContent}</pre>
      </Stack>
    </div>
  );

  function handleSelectNetwork(option: IDropdownOption) {
    console.log(option);
  }
};
