/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-18 21:30:19
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-18 22:32:13
 */
import fs from 'fs';
import path from 'path';

export const getFiles = (dir: string = path.resolve(__dirname, '../components')): string[] => {
  const mdList: string[] = [];
  const isDir = (d: string) => {
    const stat = fs.statSync(d);
    if (stat.isDirectory()) {
      // 判断是不是目录
      const dirs = fs.readdirSync(d);
      dirs.forEach((value) => {
        // console.log('路径',path.resolve(dir,value));
        isDir(path.join(d, value));
      });
    } else if (stat.isFile()) { // 判断是不是文件
      const _file = d.split('\\');
      const mdFile = _file[_file.length - 1];
      if (mdFile.endsWith('.md') && !mdFile.startsWith('install')) {
        mdList.push(mdFile.replace('.md', ''));
      }
    }
  };
  if (fs.statSync(dir).isDirectory()) { isDir(dir); }
  return mdList;
};
